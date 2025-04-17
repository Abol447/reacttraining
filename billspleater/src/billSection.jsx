import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const show = "flex flex-col font-mono";
function BillSection({ info, setInfo }) {
  const [bill, setBill] = useState(0);
  const billHandeller = (e) => {
    setBill(Number(e.target.value));
  };

  const [option, setOption] = useState("you");
  const selectHandeller = function (e) {
    setOption(e.target.value);
  };

  const [you, setYou] = useState(0);
  const youHandeller = function (e) {
    setYou(Number(e.target.value));
  };

  const [him, setHim] = useState(0);
  const himHandeller = (e) => {
    setHim(Number(e.target.value));
  };

  const person = info.filter((data) => data.flag == true);

  const spilitHandeller = function () {
    setInfo((preinfo) =>
      preinfo.map((data) =>
        data.name == person[0].name
          ? {
              ...data,
              bill: bill - (option == "you" ? you : him),
              color: option == "you" ? "green" : "red",
            }
          : data
      )
    );
  };
  return person.length > 0 ? (
    <div className="flex flex-col font-sans gap-5  bg-yellow-50 p-8">
      <h2 className="text-2xl font-bold ">
        Splite a bill with {person[0].name}
      </h2>
      <Input
        width="w-[40%]"
        value={bill}
        type="number"
        handeller={(x) => billHandeller(x)}
        lable="bill value"
        placeholder=""
      />
      <Input
        width="w-[40%]"
        value={you}
        type="number"
        handeller={(x) => youHandeller(x)}
        lable="your expence"
        placeholder=""
      />
      <Input
        width="w-[40%]"
        value={him}
        type="number"
        handeller={(x) => himHandeller(x)}
        lable={person[0].name + "'s expence"}
        placeholder=""
      />
      <select
        value={option}
        className="p-2 w-[40%] ml-[60%] font-bold border-2 border-yellow-700 outline-0 rounded-[10px]"
        onChange={(e) => selectHandeller(e)}
      >
        <option value="you">you</option>
        <option value={person[0].name}>{person[0].name}</option>
      </select>
      <Button
        id="splitBtn"
        txt="spilit"
        w="w-[40%]"
        handeller={spilitHandeller}
      />
    </div>
  ) : (
    ""
  );
}

export default BillSection;
