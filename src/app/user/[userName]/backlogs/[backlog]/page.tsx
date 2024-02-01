import BacklogHandler from "@/containers/Backlogs/BacklogHandler";
import Feed from "@/containers/Feed";
import { PageDefaultProps } from "@/types";
import React from "react";

export default async function Backlog({ params }: PageDefaultProps) {
  const isActiveBacklog = params.backlog;

  return (
    <div className="flex w-full  flex-col items-center">
      {isActiveBacklog ? <BacklogHandler /> : <Feed />}
    </div>
  );
}
