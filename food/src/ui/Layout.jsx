import React from "react";
import Header from "./header";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import { Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";
  return (
    <>
      <Header />
      <div className=" h-screen py-14 ">
        <div className="px-5 pb-14">
          {isloading ? <LoadingPage /> : ""}
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
