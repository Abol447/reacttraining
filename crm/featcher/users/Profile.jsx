import React from "react";
import BackPageBtn from "../../Public/BackPageBtn";
import UpdateUserData from "./UpdateUserData";

export default function Profile() {
  return (
    <div className="px-5 py-3 space-y-5">
      <div className="flex  justify-between ">
        <div className="font-bold text-3xl items-center">PROFILE</div>
        <BackPageBtn />
      </div>
      <div className="space-y-2">
        <div className="font-bold text-xl">Update Info</div>
        <UpdateUserData />
      </div>
    </div>
  );
}
