import CardBtn from "./CardBtn";
import { useLoaderData } from "react-router-dom";
import { order } from "../../data/data";
import BtnAdd from "./BtnAdd";
import { useDispatch } from "react-redux";
import { AddItem, increase } from "../cart/CartSlice";
const sold = "grayscale w-[150px] h-[90%] ";
const exist = " w-[150px] h-[90%] ";
const Item = {
  pizzaId: 0,
  name: "",
  quantity: 0,
  unitPrice: 0,
  totalPrice: 0,
  ingredients: [],
};
export default function MenuItem() {
  const dispatch = useDispatch();
  const menu = useLoaderData();
  const AddToCart = function (item) {
    const data = {
      ...Item,
      pizzaId: item.id,
      unitPrice: item.unitPrice,
      name: item.name,
      totalPrice: item.unitPrice,
      quantity: 1,
      ingredients: item.ingredients,
    };
    dispatch(AddItem(data));
  };
  const addOrder = function (id) {
    order(menu.data[id - 1]);
    console.log(menu.data[id - 1]);
  };

  return (
    <div className="ml-5 flex flex-col ">
      {menu.data.map((i, index) => (
        <div className="flex gap-2 py-2 h-[150px]">
          <img
            src={i.imageUrl}
            alt="pizzapic"
            className={i.soldOut ? sold : exist}
          />
          <div className="flex flex-col justify-between border-b-[.5px] py-2 border-b-gray-300 w-full">
            <div className="font-bold">
              <div>{i.name}</div>
              <div>{i.ingredients.map((i) => i + "   ,   ")}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-bold">{i.unitPrice}$</div>
              {i.soldOut ? (
                ""
              ) : (
                <>
                  <BtnAdd id={i.id} Add={AddToCart} item={i}>
                    <CardBtn increase={increase} id={i.id} />
                  </BtnAdd>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
