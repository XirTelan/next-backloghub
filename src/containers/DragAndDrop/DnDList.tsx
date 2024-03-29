"use client";
import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import BacklogDndCard from "../Backlogs/BacklogDndCard";
import ActionButton from "@/components/ActionButton";
import { IoAdd } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Title from "@/components/Common/Title";
import { BacklogDTO } from "@/zodTypes";
import useSWR from "swr";
import { fetcher } from "@/utils";

const DnDList = ({ userName }: { userName: string }) => {
  const { data, isLoading, mutate } = useSWR(
    `/api/backlogs?userName=${userName}&type=baseInfo`,
    fetcher,
  );
  const [isDirty, setIsDirty] = useState(false);

  const [backlogs, setBacklogs] = useState<BacklogDTO[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!data) return;
    setBacklogs(data.backlog);
  }, [data]);

  const onDelete = async (id: string) => {
    const res = await fetch(`/api/backlogs/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Deleted");
      mutate();
    }
  };

  const onSave = async () => {
    backlogs.forEach((backlog, index) => {
      backlog.order = index;
    });
    const res = await fetch(`/api/backlogs/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backlogs),
    });
    if (res.ok) {
      toast.success("Saved");
      mutate();
      setIsDirty(false);
    }
  };
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <div className="rounded border border-neutral-800 bg-neutral-900 px-2 pb-2 ">
        <Title title="Manage backlogs">
          <ActionButton
            title={"Create backlog"}
            onClick={() => router.push("/backlog/create")}
          >
            <IoAdd />
          </ActionButton>
        </Title>
        <div>
          <Reorder.Group
            className="flex flex-col gap-2"
            axis="y"
            values={backlogs}
            onReorder={(newOrder) => {
              if (!isDirty) setIsDirty(true);
              setBacklogs(newOrder);
            }}
          >
            {backlogs.map((backlog) => (
              <BacklogDndCard
                editAction={() => router.push(`/backlog/edit/${backlog._id}`)}
                deleteAction={onDelete}
                key={backlog._id}
                item={backlog}
              />
            ))}
          </Reorder.Group>
        </div>
      </div>
      {isDirty && (
        <div className="mt-2 flex w-full justify-center">
          <ActionButton shrink={false} title="Save changes" onClick={onSave}>
            <RiSave3Fill />
          </ActionButton>
        </div>
      )}
    </>
  );
};

export default DnDList;
