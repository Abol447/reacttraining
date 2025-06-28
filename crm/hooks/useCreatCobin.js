import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertNewRow } from "../Data/request/request";
import toast from "react-hot-toast";
import { getSetting } from "../Data/request/SettingRequest";
import { useContext } from "react";
import { ModalContext } from "../Public/modal";

export const useCreatCobin = function (reset) {
  const { setOpen } = useContext(ModalContext);
  const queryclient = useQueryClient();
  const { mutate, isSuccess } = useMutation({
    mutationFn: (data) => insertNewRow(data),
    onSuccess: () => {
      toast.success("cobin add");
      queryclient.invalidateQueries({
        queryKey: ["cobins"],
        queryfn: getSetting,
      });
      setOpen("");
      reset();
    },
  });
  return { mutate, isSuccess };
};
