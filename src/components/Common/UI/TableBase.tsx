import React from "react";
import SearchBar from "@/components/SearchBar";

const TableBase = ({
  title,
  description,
  headers,
  children,
  customButton,
  search = false,
}: TableBaseProps) => {
  return (
    <>
      <div className=" flex min-h-80 w-full flex-col bg-layer-1">
        {title && (
          <div className="px-4 pb-6  pt-4">
            <div className=" text-xl">{title}</div>
            <div className=" text-base text-secondary-text">{description}</div>
          </div>
        )}
        {customButton && (
          <section
            className="relative flex flex-col"
            aria-label="data table  toolbar"
          >
            <div className="absolute hidden">1</div>
            <div className="flex w-full">
              {search && <SearchBar />}
              <div className="ms-auto">{customButton}</div>
            </div>
          </section>
        )}
        <table>
          <thead>
            <tr className=" h-12   bg-layer-accent-1">
              {headers.map((header) => (
                <th key={header} className="p-4 text-start text-primary-text">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" divide-y divide-subtle-1">{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableBase;

type TableBaseProps = {
  title: string;
  description: string;
  headers: string[];
  search?: boolean;
  customButton?: React.ReactElement;
  children: React.ReactElement;
};
