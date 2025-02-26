import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Addfriend({ infoHandeller }) {
  const [name, setname] = useState("");
  const [pic, setpic] = useState("");
  const namehandeller = function (e) {
    setname(e.target.value);
  };
  const pichandeller = function (e) {
    setpic(e.target.value);
  };
  const addinfo = function (e) {
    e.preventDefault();
    if (!name.trim() || !pic.trim()) return;
    infoHandeller({
      name: name,
      pic: pic,
      color: "gray",
      bill: 0,
      flag: false,
    });
    setname("");
    setpic("");
  };
  return (
    <div className="w-[400px] bg-yellow-50 p-5">
      <form
        action=""
        onSubmit={infoHandeller}
        className=" flex gap-2 flex-col justify-between items-stretch "
      >
        <Input
          width="w-[60%]"
          value={name}
          type="text"
          handeller={(x) => namehandeller(x)}
          lable="Friend Name"
          placeholder="name"
        />
        <Input
          width="w-[60%]"
          value={pic}
          type="text"
          handeller={pichandeller}
          lable="Pictuer Address"
          placeholder="Address"
        />
        <div className="flex justify-between">
          <div></div>
          <Button id="addBtn" handeller={addinfo} txt="Add" w="60%" />
        </div>
      </form>
    </div>
  );
}

export default Addfriend;
