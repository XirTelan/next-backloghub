import InputField from "@/components/Common/UI/InputField";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FieldsBlockProps } from "@/types";
import ButtonBase from "@/components/Common/UI/ButtonBase";
import TableBase from "@/components/Common/UI/TableBase";
import Select from "@/components/Common/UI/Select";

const UserFieldsBlock = ({ errors, control, register }: FieldsBlockProps) => {
  const fieldsArray = useFieldArray({
    name: "fields",
    control,
    rules: {},
  });

  const addButton = (
    <ButtonBase
      type="button"
      text="Add field"
      onClick={() =>
        fieldsArray.append({
          name: "",
          type: "text",
          protected: false,
        })
      }
    />
  );

  return (
    <>
      <TableBase
        headers={["№", "Name", "Type", "Actions"]}
        title={"Fields"}
        customButton={addButton}
        description={""}
      >
        <>
          <tr className=" border-b border-subtle-1">
            <td colSpan={2} className="px-4">
              <InputField value={"Title"} variant="small" layer={2} readOnly />
            </td>
            <td className="text-center text-secondary-text" colSpan={2}>
              Is field is required and cant be deleted
            </td>
          </tr>
          {fieldsArray.fields.map((field, index) => (
            <tr key={field.id} className=" border-b border-subtle-1">
              <td className="text-center">{index + 1}</td>
              <td className="px-4">
                <InputField
                  helperText={
                    errors &&
                    errors[index] && {
                      message: errors[index].name.message,
                      type: "error",
                    }
                  }
                  variant="small"
                  layer={2}
                  {...register(`fields.${index}.name`)}
                />
              </td>
              <td className="px-4 text-center">
                <Select
                  {...register(`fields.${index}.type`)}
                  options={["Text", "Timer", "Number", "Date"]}
                />

              </td>
              <td className="px-4 text-center">
                <button onClick={() => fieldsArray.remove(index)}>
                  <RiDeleteBack2Line size={24} />
                </button>
              </td>
            </tr>
          ))}
        </>
      </TableBase>
    </>
  );
};

export default UserFieldsBlock;
