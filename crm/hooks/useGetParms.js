import { useSearchParams } from "react-router-dom";

export default function useGetParms(key) {
  const [searchParams] = useSearchParams();
  const params = searchParams.get(key);
  return params;
}
