import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "../../Public/InputContainer";
import { getuserData } from "./function/getuserData";
import Button from "../../Public/Button";
import { UpdateUserReq } from "../../Data/request/LoginRequest";

export default function UpdateUserData() {
  const userData = getuserData();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: userData.email, fullName: userData.fullname },
  });

  return (
    <div className=" bg-white border border-gray-300 w-[60%] p-4 rounded-2xl">
      <form
        onSubmit={handleSubmit((data) => UpdateUserReq(data))}
        action=""
        className="space-y-3 font-bold "
      >
        <InputContainer name="email Address">
          <input
            type="text"
            {...register("email")}
            className="input text-gray-400"
            defaultValue={userData.email}
            disabled={true}
          />
        </InputContainer>
        <InputContainer name="full Name">
          <input type="text" {...register("fullName")} className="input" />
        </InputContainer>
        <InputContainer name="avatar">
          <input type="file" {...register("avatar")} className="input " />
        </InputContainer>
        <div className="flex items-center justify-end gap-2 mt-2">
          <button className="btn rounded-2xl bg-blue-800 text-white">
            cancel
          </button>
          <button className="btn rounded-2xl">updateInfo</button>
        </div>
      </form>
    </div>
  );
}
