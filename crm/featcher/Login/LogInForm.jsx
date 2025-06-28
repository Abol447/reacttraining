import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../../Data/request/LoginRequest";
import useLogIn from "./hooks/useLogIn";
import Loading from "../../Public/Loading";
import Loadingsm from "../../Public/Loadingsm";
import { saveTokenLocal } from "../../functions/localStorage";

export default function LogInForm() {
  const { login, isPending } = useLogIn();
  const { register, handleSubmit, reset } = useForm();
  const sumbit = function (data) {
    login(data, {
      onSuccess: (response) => {
        saveTokenLocal(
          response.access_token,
          response.refresh_token,
          response.user
        );
      },
    });

    reset();
  };
  return (
    <div className="bg-white rounded-2xl m-auto w-[300px] h-[350px] flex flex-col items-center p-10 shadow shadow-gray-300">
      <div>
        <img className="w-[100px]" src="./Data/image/logo-light.png" alt="" />
      </div>
      <form
        action=""
        onSubmit={handleSubmit(sumbit)}
        className="flex flex-col gap-5 m-auto items-center "
      >
        <input
          placeholder="email"
          className="LoginInput"
          type="text"
          {...register("email")}
        />
        <input
          placeholder="password"
          className="LoginInput"
          type="password"
          {...register("password")}
        />
        <button
          className="cursor-pointer text-sm hover:bg-gray-50 font-bold rounded-2xl btn w-[150px]"
          type="submit"
        >
          {isPending ? <Loadingsm /> : "login"}
        </button>
      </form>
    </div>
  );
}
