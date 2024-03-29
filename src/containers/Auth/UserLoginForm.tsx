"use client";
import ButtonBase from "@/components/Common/UI/ButtonBase";
import InputField from "@/components/Common/UI/InputField";
import LinkBase from "@/components/Common/UI/LinkBase";
import { SignInSchema } from "@/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { z } from "zod";

type FormData = z.infer<typeof SignInSchema>;
const UserLoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(SignInSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        helperText={
          errors.username && {
            message: errors.username.message!,
            type: "error",
          }
        }
        placeholder="mail@example.com"
        label="Continue with email"
        {...register("username")}
      />
      <InputField
        type="password"
        helperText={
          errors.password && {
            message: errors.password.message!,
            type: "error",
          }
        }
        label="Password"
        {...register("password")}
      />
      <span className=" inline-flex w-full items-center text-nowrap border-b border-subtle-1 pb-4 text-secondary-text">
        Don&apos;t have an account?&nbsp;
        <LinkBase href={"/register"}>Create</LinkBase>
      </span>
      <ButtonBase text="Continue">
        <FaArrowRight size={16} />
      </ButtonBase>
    </form>
  );
};

export default UserLoginForm;
