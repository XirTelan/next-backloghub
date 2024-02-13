"use client";
import React from "react";
import { motion } from "framer-motion";
import { TemplateDTO } from "@/types";
import { IoMdTimer } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";

const TemplateCard = ({ template, toSubmit }: TemplateCardProps) => {
  const icons = {
    timer: <IoMdTimer />,
    text: <IoText />,
    number: <AiOutlineFieldNumber />,
    date: <FaCalendarCheck />,
  };

  return (
    <>
      <div className="relative flex grow flex-col  ">
        <div
          className=" absolute bottom-0 left-0 right-0 top-0 z-0 w-full  rounded-t-xl bg-gradient-to-b from-neutral-900 "
          style={{
            backgroundImage: "url(/HDwallpape.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className=" absolute bottom-0 left-0 right-0 top-0 z-0 w-full rounded-t-xl  bg-neutral-900 opacity-90  "></div>
        <div className=" relative z-10  rounded-t-xl p-4">
          <h2 className=" mb-8 rounded-t-xl  text-center text-2xl font-bold opacity-90">
            {template.templateTitle}
          </h2>
          <div className=" text-base">
            <div>
              <strong>Features:</strong> <div>{template.features}</div>
            </div>
            <div>
              <strong>Fields:</strong>
              <ul className="flex flex-wrap gap-2">
                {template.fields.map((field) => (
                  <li
                    className="relative flex items-center rounded-xl border border-neutral-700 bg-neutral-800 p-1 text-center"
                    key={field.name}
                  >
                    <div className="ms-8">{field.name}</div>
                    <div className="absolute bottom-0 left-0 top-0 ms-auto flex items-center rounded-s-xl border-s border-s-neutral-700  bg-green-800 p-2">
                      {icons[field.type]}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <strong>Categories:</strong>
              <ul
                className="flex flex-col gap-1"
                style={{ columnCount: template.categories.length <= 4 ? 1 : 2 }}
              >
                {template.categories.map((category) => (
                  <li
                    key={category.name}
                    className="rounded-xl  border border-neutral-700 bg-neutral-800 p-1 text-center"
                    style={{ color: category.color || "#fff" }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="relative mb-8 px-4 pt-2  ">
        <p>{template.description}</p>
      </motion.div>
      <button
        onClick={toSubmit}
        className=" w-full rounded-b-xl bg-cyan-500 p-2"
      >
        Use Template
      </button>
    </>
  );
};

export default TemplateCard;

type TemplateCardProps = {
  template: TemplateDTO;
  toSubmit: () => void;
};
