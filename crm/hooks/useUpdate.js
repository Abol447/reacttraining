import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCobin } from "../Data/request/request";
import toast from "react-hot-toast";
import { ModalContext } from "../Public/modal";
import { useContext } from "react";

export const useUpdate = function (reset) {
  const { setOpen } = useContext(ModalContext);
  const queryclient = useQueryClient();
  const { mutate: update, isSuccess } = useMutation({
    mutationFn: (data) => UpdateCobin(data.id, data.info),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["cobins"] });
      toast.success("update");
      reset();
      setOpen("");
    },
  });
  return { update, isSuccess };
};
