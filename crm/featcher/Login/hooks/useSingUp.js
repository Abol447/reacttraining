import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SingUpReq } from "../../../Data/request/LoginRequest";
import toast from "react-hot-toast";

export default function useSingUp() {
  const { mutate } = useMutation({
    mutationFn: (data) => SingUpReq(data),
    onSuccess: () => {
      toast.success("new user add");
    },
  });
  return { mutate };
}
