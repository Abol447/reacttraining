import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "../../Public/InputContainer";
import useSingUp from "../Login/hooks/useSingUp";
import { getuserData } from "./function/getuserData";

export default function UserForm() {
  const { mutate } = useSingUp();
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  getuserData();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        const userdata = {
          email: data.email,
          password: data.password,
          data: { fullname: data.name, flag: "" },
        };
        mutate(userdata, {
          onSuccess: () => {
            reset();
          },
        });
      })}
      className="space-y-5 w-[900px] bg-white p-5 rounded-2xl"
    >
      <InputContainer name="full name">
        <input
          type="text"
          className="input"
          {...register("name", {
            required: "this fielde is required",
          })}
        />
        {errors.name && <div className="error">{errors.name.message}</div>}
      </InputContainer>
      <InputContainer name="Email Address">
        <input
          type="text"
          className="input"
          {...register("email", {
            pattern: {
              value: /^[\w_.]+@([\w_]+\.)+[\w_]{2,4}$/,
              message: "please enter valide value",
            },
          })}
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </InputContainer>
      <InputContainer name="Password (min 8 charecter)">
        <input
          type="text"
          className="input"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "atleast 8 charecter",
            },
          })}
        />
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
      </InputContainer>
      <InputContainer name="Repeat Password">
        <input
          type="text"
          className="input"
          {...register("repetPassword", {
            validate: (value) =>
              value === getValues().password ||
              "It must be the same as the password",
          })}
        />
        {errors.repetPassword && (
          <div className="error">{errors.repetPassword.message}</div>
        )}
      </InputContainer>
      <div className="flex gap-3 justify-end">
        <button type="reset" className="btn font-bold rounded-2xl ">
          Cancel
        </button>
        <button
          type="submit"
          className="btn bg-blue-600 rounded-2xl text-white font-bold"
        >
          Creat NewUser
        </button>
      </div>
    </form>
  );
}
