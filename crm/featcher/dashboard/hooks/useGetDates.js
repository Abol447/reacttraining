import { eachDayOfInterval, formatDate, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getNumber } from "../../../functions/regexFn";

export default function useGetDates() {
  const [searchParams] = useSearchParams();
  let day = getNumber(searchParams.get("days"));
  if (!day) day = 7;
  const start = subDays(new Date(), day);
  const end = new Date();
  const dates = eachDayOfInterval({ start, end });
  return { dates };
}
