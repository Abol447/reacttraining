import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import { useState } from "react";
import { Api } from "../Api";

export default function Opration() {
  const dispatch = useDispatch();
  const [deposit, setdeposit] = useState(0);
  const handleDeposit = function () {
    setdeposit(info.operation.deposit);
  };
  const handelWithdraw = function () {
    setdeposit(info.operation.deposit - info.operation.whitdraw);
  };
  const handelLoan = function () {
    setdeposit(info.operation.deposit + info.operation.loan);
  };
  const info = useSelector((state) => state);
  return (
    <div>
      <div className="px-4 top-1 right-1 font-bold bg-blue-500 border-2 absolute  w-fit h-[50px] flex justify-center items-center rounded-2xl ">
        {deposit}
      </div>
      <div className="mt-[70px] font-mono flex flex-col gap-4  w-[615px] m-auto p-5 bg-gray-300 rounded-2xl">
        <div className="flex flex-col gap-1 items-center">
          <Input cattegori={"operation"} lable={"Deposit"} id={"deposit"} />
          <div className="flex justify-between w-[70%]">
            <select
              onChange={(e) => {
                dispatch({ type: "currency", payload: e.target.value });
                dispatch(Api(e.target.value));
                console.log(info.api);
              }}
              value={info.currency}
              className="w-[100px] border-2 rounded-xl px-2 py-1 border-gray-500"
            >
              <option value="us doller">us doller</option>
              <option value="EUR">EUR</option>
            </select>
            <button onClick={handleDeposit} className="buttom w-[100px] ">
              deposit
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1 items-center">
          <Input cattegori={"operation"} lable={"whitdraw"} id={"whitdraw"} />
          <button onClick={handelWithdraw} className="buttom w-[70%] ">
            whitdraw
          </button>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Input
            cattegori={"operation"}
            lable={"request loan"}
            placeholder={"loan amount"}
            id={"loan"}
          />
          <Input
            placeholder={"loan Pupose"}
            cattegori={"operation"}
            id={"loanpurpes"}
          />

          <button onClick={handelLoan} className="buttom w-[70%]">
            {" "}
            request laon
          </button>
        </div>
        <div className="m-auto flex justify-between w-[70%] gap-1 items-center">
          <div>pay back {info.operation.loan}$</div>
          <button className="buttom"> pay loan</button>
        </div>
      </div>
    </div>
  );
}
