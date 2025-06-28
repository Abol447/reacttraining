import React, { useEffect, useState } from "react";
import useGetBookingById from "../booking/hooks/useGetBookingById";
import DetailHeader from "../booking/BookingDetail/detailHeader";
import DetailBody from "../booking/BookingDetail/DetailBody";
import DetailBodyHeader from "../booking/BookingDetail/DetailBodyHeader";
import DetailBodyMain from "../booking/BookingDetail/DetailBodyMain";
import DetailBodyFooter from "../booking/BookingDetail/DetailBodyFooter";
import Loading from "../../Public/Loading";
import CheckedInFooter from "./CheckedInFooter";
import PaidCheck from "./PaidCheck";
import { useSetting } from "../../hooks/useSetting";

export default function CheckedIn() {
  const [confirmedPayment, setConfirmedPayment] = useState(false);
  const [breakfast, setbreakfast] = useState(false);
  const [breakfastPrice, setBreakfastPrice] = useState(0);
  const { data, isLoading } = useGetBookingById();
  const { data: Settig, isLoading: settingLoad } = useSetting();
  useEffect(() => {
    if (!isLoading) if (data[0]?.ispaid) setConfirmedPayment(true);
    if (data?.[0]?.hasBreakfast) {
      setbreakfast(true);
    }
  }, [data]);
  useEffect(() => {
    if (!settingLoad) {
      console.log(Settig[0].breakfastPrice);
      console.log(breakfastPrice);
      if (breakfast === true) {
        setConfirmedPayment(false);
        setBreakfastPrice(
          (pre) => pre + data[0].numGuests * Settig[0].breakfastPrice
        );
      }
    }
  }, [breakfast, settingLoad]);

  if (isLoading)
    return <Loading classname="text-5xl flex  justify-center items-center" />;
  const paymentCheck = function (value) {
    if (!value) setConfirmedPayment(false);
    setConfirmedPayment((pre) => !pre);
  };

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
      <PaidCheck
        value={confirmedPayment}
        setValue={paymentCheck}
        breaffast={breakfast}
        setbreakfast={setbreakfast}
        breafastPrice={breakfastPrice}
        totalPrice={totalPrice}
      />
      <CheckedInFooter
        enable={confirmedPayment}
        breakfast={breakfast}
        breakfastPrice={breakfastPrice}
        exteraPrice={exteraPrice}
        totalPrice={totalPrice}
      />
    </div>
  );
}
