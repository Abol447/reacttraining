import React, { useEffect, useState } from "react";
import InputContainer from "../../Public/InputContainer";
import { useForm } from "react-hook-form";
import { useSetting } from "../../hooks/useSetting";
import Button from "../../Public/Button";
import { useSettingUpdaate } from "../../hooks/useSettingUpdate";
export default function Setting() {
  const { data: setting, isLoading } = useSetting();
  const { updateSt } = useSettingUpdaate();
  const { register, reset, handleSubmit } = useForm();
  useEffect(() => {
    if (!isLoading) {
      reset(setting[0]);
    }
  }, [isLoading, setting, reset]);
  return (
    <>
      <div className="font-bold text-2xl w-[800px] m-auto mt-5">
        Update Hotel Settings
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          updateSt({
            id: data.id,
            rest: data,
          });
        })}
        className="flex flex-col gap-4 shadow w-[800px] m-auto mt-10 px-5 py-10 rounded-2xl shadow-gray-300"
      >
        <InputContainer name="Minimum Nights / Booking">
          <input
            className="input shadow shadow-gray-300 "
            {...register("minBookingLegth")}
            type="number"
          />
        </InputContainer>
        <InputContainer name="Maximum Nights / Booking">
          <input
            className="input shadow shadow-gray-300"
            {...register("maxBookingLegth")}
            type="number"
          />
        </InputContainer>
        <InputContainer name="Maximum Guests / Booking">
          <input
            className="input shadow shadow-gray-300"
            {...register("maxguestperBooking")}
            type="number"
          />
        </InputContainer>
        <InputContainer name="Braekfast Price">
          <input
            className="input shadow shadow-gray-300"
            type="number"
            {...register("breakfastPrice")}
          />
        </InputContainer>
        <button
          style={{ direction: "rtl" }}
          className=" bg-blue-600 w-[150px] py-1 font-bold text-white"
          type="submit"
        >
          update
        </button>
      </form>
    </>
  );
}
