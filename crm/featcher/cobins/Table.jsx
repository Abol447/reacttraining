import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useQuery } from "@tanstack/react-query";
import { getCobins } from "../../Data/request/request";
import Button from "../../Public/Button";
import AddCobin from "./AddCobin";
export default function Table() {
  const { data, isLoading } = useQuery({
    queryKey: ["cobins"],
    queryFn: getCobins,
  });
  const [update, setUpdate] = useState(0);
  const [defualtValue, setdefualtValue] = useState({});
  const updateHandeller = function (id) {
    const defualt = data.find((item) => item.id === id);
    setdefualtValue(() => defualt);
    setUpdate((pre) => (pre === id ? 0 : id));
  };
  const [newcobin, setnewcobin] = useState(false);
  return (
    <>
      {" "}
      <table className=" m-auto mt-5 w-[80%]">
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

          <div className="mt-8">
            <Button
              content="new cobin"
              blue={true}
              action={() => setnewcobin((pre) => !pre)}
            />
          </div>
        </tbody>
      </table>
      {newcobin ? (
        <AddCobin />
      ) : update > 0 ? (
        <AddCobin defualtValue={defualtValue} id={update} />
      ) : null}
    </>
  );
}
