import React, { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { UpdateCobin } from "../../Data/request/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCreatCobin } from "../../hooks/useCreatCobin";
export default function AddCobin({ defualtValue = null, id }) {
  const [defu, setdefualt] = useState(defualtValue);
  useEffect(() => {
    setdefualt(() => defualtValue);
  }, [defualtValue]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: defualtValue || {},
  });
  const { mutate } = useCreatCobin(reset);
  const { update } = useCreatCobin(reset);
  const onsumbit = (data) => {
    if (defualtValue) {
      const info = {
        id: id,
        info: data,
      };
      console.log(update(info));
    } else {
      data = { ...data, image: data.image[0] };
      mutate(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onsumbit)}
      className="mt-5 p-5 bg-gray-50 rounded-2xl text-gray-800 w-[80%] font-bold m-auto space-y-5"
    >
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">cobin name</div>
        <input
          className="input"
          type="text"
          // value={defu !== null ? defu.name : null}
          {...register("name", {
            required: "this feild is required",
          })}
        />
        <div>{errors?.name?.message}</div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">maxcapacity</div>
        <input
          className="input"
          type="number"
          {...register("maxcapacity", {
            required: "this feild is required",
            min: {
              value: 1,
              message: "min value is 1",
            },
          })}
          // value={defu !== null ? defu.maxcapacity : null}
        />
        <div>{errors?.maxcapacity?.message}</div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">regular Price</div>
        <input
          className="input"
          type="number"
          {...register("regularPrice", {
            required: "this feild is required",
          })}
          // value={defu !== null ? defu.regularPrice : null}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">discount</div>
        <input
          // value={defu !== null ? defu.discount : null}
          className="input"
          type="text"
          {...register("discount", {
            required: "this feild is required",
            validate: (value) =>
              value > getValues().regularPrice
                ? "cant be grater than regularPrice"
                : null,
          })}
        />
        <div>{errors?.discount?.message}</div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">description for website</div>
        <textarea
          // value={defu !== null ? defu.description : null}
          className="input h-[80px]"
          {...register("description")}
        ></textarea>
      </div>
      <div className="flex gap-10 items-center">
        <div className="basis-[40%]">cobin Photo</div>
        <input className="input" type="file" {...register("image")} />
      </div>
      <div style={{ direction: "rtl" }} className="flex gap-5">
        {defualtValue !== null ? (
          <button className="btn " type="submit">
            update
          </button>
        ) : (
          <button className="btn " type="submit">
            sumbit
          </button>
        )}

        <button className="btn bg-blue-800 text-white">cancel</button>
      </div>
    </form>
  );
}
