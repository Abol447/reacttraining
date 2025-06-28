import TableP from "../../Public/TableP";
import BookingTableRow from "./BookingTableRow";
import BookingHeader from "./BookingHeader";
import { Pagination } from "../../Public/Pagination";
import useGetBooking from "./hooks/useGetBooking";
import Loading from "../../Public/Loading";
import { useBookingFilter } from "./hooks/useBookingFilter";
import { useBookingSort } from "./hooks/useBookingSoret";

const Headercontent = [
  { width: "15%", body: "COBIN" },
  { width: "25%", body: "Guest" },
  { width: "40%", body: "Dates" },
  { width: "15%", body: "Status" },
  { width: "", body: "Amount" },
  { with: "", body: "" },
];
export default function BookingTable() {
  let { data, isLoading } = useGetBooking();
  data = useBookingFilter(data);
  data = useBookingSort(data);
  return (
    <div>
      <BookingHeader />
      <div className="m-auto w-[85%] mt-5">
        {isLoading ? (
          <Loading />
        ) : (
          <Pagination number={10} data={data}>
            <TableP>
              <TableP.Header content={Headercontent} />
              <Pagination.Body
                render={(item) => (
                  <TableP.body>
                    <tr>
                      <BookingTableRow info={item} />
                    </tr>
                  </TableP.body>
                )}
              />
            </TableP>
            <Pagination.Footer>
              <Pagination.before />
              <Pagination.page />
              <Pagination.next />
            </Pagination.Footer>
          </Pagination>
        )}
      </div>
    </div>
  );
}
