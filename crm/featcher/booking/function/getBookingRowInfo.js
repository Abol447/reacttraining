import { CalculateDays } from "../../../functions/DatesFn";

export function getBookingRowInfo(info) {
  return {
    cobinName: info.cobin.name,
    guestName: info.guest.fullnaem,
    guestEmail: info.guest.email,
    daysofStartDate: CalculateDays(info.startDate),
    startDate: info.startDate,
    endDate: info.endDate,
    numnights: info.numnights,
    status: info.status,
  };
}
