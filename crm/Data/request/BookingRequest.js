import axios from "axios";
import { apikey } from "./request";
import { useBookingSort } from "../../featcher/booking/hooks/useBookingSoret";
import { getDateByDays, getToday } from "../../functions/DatesFn";
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfToday,
  startOfTomorrow,
} from "date-fns";

export const getBooking = async function () {
  const response = await axios.get(
    "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking?select=*,cobin(name),guest(fullName,email)",
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer " + apikey,
      },
    }
  );

  return response.data;
};
export const getBookingById = async function (id) {
  const response = await axios.get(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking?select=*,cobin(name),guest(fullName,email,nationalID)&id=eq.${id}`,
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer " + apikey,
      },
    }
  );

  return response.data;
};
export const Checkedin = async function (id, value) {
  const response = await axios.patch(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking?id=eq.${id}`,
    value,
    {
      headers: {
        Authorization: `Bearer ${apikey}`,
        apikey: apikey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );
  console.log(response);
};
export async function DeleteBooking(id) {
  const response = await axios.delete(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking?id=eq.${id}`,
    {
      headers: {
        Authorization: `Bearer ${apikey}`,
        apikey: apikey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );
  console.log(response);
}
export async function getBookingByDate(date) {
  const response = await axios.get(
    "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking",
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer " + apikey,
      },
      params: {
        select: "*,cobin(name),guest(fullName,email)",
        created_at: `gte.${getDateByDays(date)}`,
      },
    }
  );
  return response.data;
}
export const getTodayBooking = async function () {
  const today = startOfDay(new Date()).toString();
  const tomorrow = startOfDay(addDays(new Date(), 1)).toString();
  console.log(today, tomorrow);
  const response = await axios.get(
    "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/booking",
    {
      params: {
        select: "*,cobin(name),guest(fullName,email)",
        or: `(and(and(startDate.gte.${today},startDate.lte.${tomorrow}),status.eq.unconfirmed),and(and(endDate.gte.${today},endDate.lte.${tomorrow}),status.eq.checked-in))`,
      },
      headers: {
        Range: "0-9",
        apikey: apikey,
        Authorization: "Bearer " + apikey,
      },
    }
  );

  return response.data;
};
