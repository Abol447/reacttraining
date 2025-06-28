import React from "react";
import useGetBookingById from "./hooks/useGetBookingById";
import DetailHeader from "./BookingDetail/detailHeader";
import Loading from "../../Public/Loading";
import DetailBody from "./BookingDetail/DetailBody";
import DetailBodyHeader from "./BookingDetail/DetailBodyHeader";

import DetailBodyFooter from "./BookingDetail/DetailBodyFooter";
import DetailBodyMain from "./BookingDetail/DetailBodyMain";

export default function BookingDetals() {
  const { data, isLoading } = useGetBookingById();
  if (isLoading)
    return <Loading classname="text-5xl flex  justify-center items-center" />;
  const {
    id,
    status,
    startDate,
    endDate,
    numnights,
    numGuests,
    totalPrice,
    hasBreakfast,
    ispaid,
    cobin,
    guest,
    cobinPrice,
    exteraPrice,
    created_at,
  } = data[0];
  return (
    <div className="p-10  space-y-4 ">
      <DetailHeader id={id} status={status} />
      <DetailBody>
        <DetailBodyHeader
          cobinName={cobin.name}
          endDate={endDate}
          nightStay={numnights}
          startDate={startDate}
        />
        <DetailBodyMain
          UserGmail={guest.email}
          UserName={guest.fullName}
          guestNum={numGuests}
          UserNId={guest.nationalID}
          hasBreakfast={hasBreakfast}
          creat_at={created_at}
        >
          <DetailBodyFooter
            totalPrice={totalPrice}
            cobinPrice={cobinPrice}
            breakfastPrice={exteraPrice}
            ispaid={ispaid}
          />
        </DetailBodyMain>
      </DetailBody>
    </div>
  );
}
