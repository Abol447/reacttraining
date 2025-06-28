import { useContext, useMemo } from "react";
import { CobinSortCx } from "../pages/Cobins";
import {
  SortAlphabet,
  SortAscending,
  SortDescending,
} from "../functions/SortFn";
export function useSortCobin(data) {
  const context = useContext(CobinSortCx);
  const sortedData = useMemo(() => {
    if (!context) {
      console.warn("CobinSortCx is undefined");
      return data;
    }

    const { sortOp: SelectedItem } = context;
    const dataCopy = [...data];

    if (SelectedItem === "Alphabet") return SortAlphabet(dataCopy, "name");
    if (SelectedItem === "Ascending")
      return SortAscending(dataCopy, "regularPrice");
    if (SelectedItem === "Descending")
      return SortDescending(dataCopy, "regularPrice");
    return dataCopy;
  }, [context, data]);

  return sortedData;
}
