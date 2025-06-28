import { useSearchParams } from "react-router-dom";

export const useFilterCobins = function (data) {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("discount");
  console.log(query);
  if (query === "No-Discount") {
    return data.filter((item) => item.discount === 0);
  } else if (query === "Whit-Discount") {
    return data.filter((item) => item.discount > 0);
  }
  return data;
};
