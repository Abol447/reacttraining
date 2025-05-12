import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCobin } from "../Data/request/request";
import toast from "react-hot-toast";

export const useUpdate = function (reset) {
  const queryclient = useQueryClient();
  const { mutate: update } = useMutation({
    mutationFn: (data) => UpdateCobin(data.id, data.info),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["cobins"] });
      toast.success("update");
      reset();
    },
  });
  return update;
};
