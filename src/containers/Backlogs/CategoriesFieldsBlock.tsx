import ColorPallete from "@/components/Common/ColorPallete";
import InputField from "@/components/Common/UI/InputField";
import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { IoClose } from "react-icons/io5";

import FieldsBlock from "../../components/FieldsBlock";
import { FieldsBlockProps } from "@/types";
import ButtonBase from "@/components/Common/UI/ButtonBase";

const CategoriesFieldsBlock = ({
  errors,
  control,
  register,
}: FieldsBlockProps) => {
  const categoriesArray = useFieldArray({
    name: "categories",
    control,
  });

  return (
    <FieldsBlock
      title="Categories"
      status="active"
      append={() =>
        categoriesArray.append({
          name: "",
          color: "#11380B",
          protected: false,
        })
      }
    >
      <>
        {categoriesArray.fields.map((item, index) => (
          <li className="flex h-8 items-center gap-2 " key={item.id}>
            <div className=" w-8 text-sm text-secondary-text">{index + 1}</div>

            <InputField
              id={`category_${index}`}
              helperText={
                errors &&
                errors[index] && {
                  message: errors[index].name.message,
                  type: "error",
                }
              }
              isSimple
              variant="small"
              layer={2}
              placeholder="Category name"
              {...register(`categories.${index}.name`)}
            />
            <div className="me-4 flex gap-2">
              <Controller
                control={control}
                name={`categories.${index}.color`}
                render={({ field: { onChange, value } }) => (
                  <ColorPallete onChange={onChange} value={value} />
                )}
              />
              <ButtonBase
                variant="secondary"
                size="small"
                onClick={() => {
                  categoriesArray.remove(index);
                }}
              >
                <IoClose />
              </ButtonBase>
            </div>
          </li>
        ))}
      </>
    </FieldsBlock>
  );
};

export default CategoriesFieldsBlock;
