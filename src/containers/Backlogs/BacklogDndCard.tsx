"use client";
import * as React from "react";
import { MdEdit } from "react-icons/md";
import { MdRemove } from "react-icons/md";

import ActionButton from "@/components/ActionButton";
import { BacklogDTO } from "@/zodTypes";
import ButtonBase from "@/components/Common/UI/ButtonBase";
import { MdOutlineDriveFileMove } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  // editAction: () => void;
  // deleteAction: (id: string) => void;
  backlog: BacklogDTO;
}

const BacklogDndCard = ({ backlog }: Props) => {
  const router = useRouter();
  async function onDelete(id: string) {
    const res = await fetch(`/api/backlogs/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Deleted");
    }
  }

  return (
    <div className=" flex w-full items-center  border border-neutral-700 bg-neutral-800  p-2">
      <span>{backlog.backlogTitle}</span>
      <div className=" ms-auto flex gap-2 ">
        <ButtonBase
          onClick={() => router.push(`/backlog/edit/${backlog._id}`)}
          size="small"
          variant="ghost"
        >
          <MdEdit size={20}/>
        </ButtonBase>
        <ButtonBase
          title="Delete"
          size="small"
          variant="dangerGhost"
          onClick={() => onDelete(backlog._id)}
        >
          <MdDeleteForever size={20} />
        </ButtonBase>
      </div>
    </div>
  );
};

export default BacklogDndCard;
