import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../Data/request/SettingRequest";

export const useSetting = function () {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { data, isLoading };
};
