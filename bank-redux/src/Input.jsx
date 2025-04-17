import { useDispatch, useSelector } from "react-redux";
import store from "./redux/Redux";

export default function Input({ lable, placeholder, id, cattegori }) {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state[cattegori]);
  console.log(customer);
  return (
    <div className="flex  items-center w-[400px] justify-between ">
      <div className="font-bold">{lable}</div>
      <input
        value={customer[id]}
        onChange={(e) => {
          e.preventDefault();
          dispatch({ type: id, payload: e.target.value });
        }}
        placeholder={placeholder}
        type="text"
        className="border-gray-400 border-2 pl-2 w-[200px] py-1 rounded-2xl bg-gray-50"
      />
    </div>
  );
}
