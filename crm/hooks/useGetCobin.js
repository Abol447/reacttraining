import { useQuery } from "@tanstack/react-query";
import { getCobins } from "../Data/request/request";

export default function useGetCobin() {
  const { data, isLoading } = useQuery({
    queryKey: ["cobins"],
    queryFn: getCobins,
  });
  return { data, isLoading };
}
