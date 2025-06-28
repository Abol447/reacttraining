import { useSearchParams } from "react-router-dom";

export function useBookingFilter(data, filter = "no") {
  const [searchParams] = useSearchParams();
  let query;
  if (filter === "no") {
    query = searchParams.get("status");
  } else query = "Checked-in";
  if (query === "Checked-in")
    return data?.filter((item) => item.status === "checked-in");
  else if (query === "Checked-out")
    return data?.filter((item) => item.status === "checked-out");
  else if (query === "unconfirmed")
    return data?.filter((item) => item.status === "unconfirmed");
  else return data;
}
