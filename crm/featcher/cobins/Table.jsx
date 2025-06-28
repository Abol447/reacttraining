import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useQuery } from "@tanstack/react-query";
import { getCobins } from "../../Data/request/request";
import Button from "../../Public/Button";
import AddCobin from "./AddCobin";
import Modal from "../../Public/modal";
import TableP from "../../Public/TableP";
import Loading from "../../Public/Loading";
import CobinsHeader from "./CobinsHeader";
import { useFilterCobins } from "../../hooks/useFilterCobins";
import { useSortCobin } from "../../hooks/useCobinSort";
import useGetCobin from "../../hooks/useGetCobin";
export default function Table() {
  let { data, isLoading } = useGetCobin();
  data = useFilterCobins(data || []);
  data = useSortCobin(data || []);
  console.log(data);
  const [update, setUpdate] = useState(0);
  const [defualtValue, setdefualtValue] = useState({});
  const updateHandeller = function (id) {
    const defualt = data.find((item) => item.id === id);
    setdefualtValue(() => defualt);
    setUpdate((pre) => (pre === id ? 0 : id));
  };
  const Headercontent = [
    { width: "10%", body: "" },
    { width: "10%", body: "COBIN" },
    { width: "20%", body: "CAPACITY" },
    { width: "15%", body: "PRICE" },
    { width: "15%", body: "DISCOUNT" },
    { width: "10%", body: "" },
  ];
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="space-y-2">
          <div className="w-[80%] m-auto mt-4">
            <TableP>
              <TableP.Header content={Headercontent} />
              <TableP.body>
                {data?.map((item) => {
                  return (
                    <tr className=" border border-gray-200" key={item.id}>
                      <TableRow
                        action={updateHandeller}
                        cobin={item}
                        gray={item.id === update ? true : false}
                      />
                    </tr>
                  );
                })}
              </TableP.body>
            </TableP>
          </div>
        </div>
      )}
      {/* <table className=" m-auto mt-5 w-[80%]">
        <thead>
          <tr className=" bg-gray-300 text-gray-800">
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr className=" border border-gray-200">
                <TableRow
                  action={updateHandeller}
                  cobin={item}
                  gray={item.id === update ? true : false}
                />
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <div className="mt-8 flex  justify-center ">
        <Modal>
          <Modal.open name={"cobin"}>
            <button className="btn m-auto w-[100%] text-white bg-blue-800 flex justify-center ">
              Add cobin
            </button>
          </Modal.open>
          <Modal.Window name={"cobin"}>
            <Modal.close />
            <AddCobin />
          </Modal.Window>
        </Modal>
      </div>
      {/* {newcobin ? (
        <></>
      ) : update > 0 ? (
        <AddCobin defualtValue={defualtValue} id={update} />
      ) : null} */}
    </>
  );
}
