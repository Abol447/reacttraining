import { useMutation } from "@tanstack/react-query";
import { UpdateSettig } from "../Data/request/SettingRequest";

export const useSettingUpdaate = function () {
  const { mutate: updateSt } = useMutation({
    mutationFn: (data) => UpdateSettig(data.id, data.rest),
  });
  return { updateSt };
};
