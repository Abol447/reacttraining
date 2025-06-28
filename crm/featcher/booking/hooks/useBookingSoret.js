import { useSearchParams } from "react-router-dom";
import {
  SortAlphabet,
  SortAscending,
  SortDescending,
} from "../../../functions/SortFn";

export function useBookingSort(data) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("sort");
  if (data) {
    const dataCopy = [...data];

    if (query === "Alphabet") return SortAlphabet(dataCopy, "name");
    if (query === "Ascending") return SortAscending(dataCopy, "numnights");
    if (query === "Descending") return SortDescending(dataCopy, "numnights");
    return dataCopy;
  }
}
