"use client";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/Common/UI/ToggleButton";
import useChangeSearchParams from "@/hooks/useChangeParams";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type FilterBlockProps = {
  backlogSlug: string;
  backlogCategories: { name: string; color: string }[];
};
const FilterBlock = ({ backlogSlug, backlogCategories }: FilterBlockProps) => {
  const [categories] = useState(backlogCategories);
  const [actviveCategories, setActiveCategories] = useState<string[]>([]);
  const changesParams = useChangeSearchParams();
  const searchParams = useSearchParams();
  const searchCategories = searchParams.get("categories");

  const onToggleChange = (toggle: string) => {
    const toggleLower = toggle.toLowerCase();
    let newQuery;
    if (actviveCategories.includes(toggleLower)) {
      newQuery = actviveCategories
        .filter((category) => category != toggleLower)
        .join("-");
    } else {
      newQuery = [...actviveCategories, toggleLower].join("-");
    }
    changesParams("categories", newQuery);
  };

  useEffect(() => {
    setActiveCategories(searchCategories ? searchCategories.split("-") : []);
  }, [searchCategories]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-wrap gap-1">
        {categories.map((category) => (
          <ToggleButton
            title={category.name}
            isActive={actviveCategories.includes(category.name.toLowerCase())}
            activeColor={category.color}
            key={category.name}
            onClick={() => onToggleChange(category.name)}
          />
        ))}
      </div>
      <div className=" flex items-center">
        <SearchBar />
        <Link
          href={`/items/create?backlog=${backlogSlug}`}
          className="ms-4 rounded bg-neutral-800 p-2"
        >
          Add
        </Link>
      </div>
    </div>
  );
};

export default FilterBlock;
