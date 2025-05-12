import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertNewRow } from "../Data/request/request";
import toast from "react-hot-toast";
import { getSetting } from "../Data/request/SettingRequest";

export const useCreatCobin = function (reset) {
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => insertNewRow(data),
    onSuccess: () => {
      toast.success("cobin add");
      queryclient.invalidateQueries({
        queryKey: ["cobins"],
        queryfn: getSetting,
      });
      reset();
    },
  });
  return { mutate };
};
