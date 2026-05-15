"use client";
import { useCreateUser } from "../hooks/useCreateUser";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/atoms/Input";
import React, { useState } from "react";
export default function CreateUserForm() {
  const { mutate, isPending } = useCreateUser();
  const [form, setFrom] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        alert(" تم انشاء المتسخدم بنجاح ");
      },
      onError: () => {
        alert(" حصا خطا حاول تاني");
      },
    });
  };
  return (
    <div>
      <form className="w-[30%]" onSubmit={handleSubmit}>
        <InputForm name="name" placeholder="Name" onChange={handleChange} />
        <InputForm name="email" placeholder="Email" onChange={handleChange} />
        <InputForm
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button size="md" type="submit">
          {isPending ? "loading" : "Create User"}
        </Button>
      </form>
    </div>
  );
}
