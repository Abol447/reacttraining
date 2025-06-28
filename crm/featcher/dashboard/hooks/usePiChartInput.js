import useGetParms from "../../../hooks/useGetParms";
import searchNight from "../function/searchNight";

export default function usePiChartInput(data = [], bookingLoading) {
  let parametr = useGetParms("days");
  if (parametr == "undefined" || !parametr) parametr = "last 7Days";
  console.log(parametr);
  let PiChartInput = [];
  if (!bookingLoading) {
    console.log(data);
    PiChartInput =
      parametr === "last 7Days"
        ? [
            {
              night: "1 night",
              value: searchNight(1, data),
              color: "#0088FE",
            },
            {
              night: "2 night",
              value: searchNight(2, data),
              color: "#00C49F",
            },
            {
              night: "3 night",
              value: searchNight(3, data),
              color: "#FFBB28",
            },
            {
              night: "4 night",
              value: searchNight(4, data),
              color: "#FF8042",
            },
            {
              night: "5 - 15 night",
              value: Array(9)
                .fill(0)
                .reduce(
                  (pre, curr, index) => pre + searchNight(index + 5, data),
                  0
                ),
              color: "#FF5722",
            },
          ]
        : parametr === "last 15Days"
        ? [
            {
              night: "1 night",
              value: searchNight(1, data),
              color: "#0088FE",
            },
            {
              night: "2 night",
              value: searchNight(2, data),
              color: "#00C49F",
            },
            {
              night: "3 night",
              value: searchNight(3, data),
              color: "#FFBB28",
            },
            {
              night: "4 night",
              value: searchNight(4, data),
              color: "#FF8042",
            },
            {
              night: "5 night",
              value: searchNight(5, data),
              color: "#8884D8",
            },
            {
              night: "6 night",
              value: searchNight(6, data),
              color: "#00BCD4",
            },
            {
              night: "7 - 25 night",
              value: Array(18)
                .fill(0)
                .reduce(
                  (pre, curr, index) => pre + searchNight(index + 7, data),
                  0
                ),
              color: "#FF5722",
            },
          ]
        : parametr === "last 30Days"
        ? [
            {
              night: "1 night",
              value: searchNight(1, data),
              color: "#0088FE",
            },
            {
              night: "2 night",
              value: searchNight(2, data),
              color: "#00C49F",
            },
            {
              night: "3 night",
              value: searchNight(3, data),
              color: "#FFBB28",
            },
            {
              night: "4 night",
              value: searchNight(4, data),
              color: "#FF8042",
            },
            {
              night: "5 night",
              value: searchNight(5, data),
              color: "#8884D8",
            },
            {
              night: "6 night",
              value: searchNight(6, data),
              color: "#00BCD4",
            },
            {
              night: "7 night",
              value: searchNight(7, data),
              color: "#E91E63",
            },
            {
              night: "8 night",
              value: searchNight(8, data),
              color: "#4CAF50",
            },
            {
              night: "9 - 30 night",
              value: Array(9)
                .fill(0)
                .reduce(
                  (pre, curr, index) => pre + searchNight(index + 9, data),
                  0
                ),
              color: "#FF5722",
            },
          ]
        : null;
  }
  return { PiChartInput };
}
