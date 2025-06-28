import React from "react";
import Button from "../../Public/Button";
import { deletCobins } from "../../Data/request/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Modal from "../../Public/modal";
import AddCobin from "./AddCobin";
import { useContext } from "react";
import { MenuContex } from "../../Public/Menu";

export default function TableRow({ cobin, action, gray }) {
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => deletCobins(id),
    onSuccess: () => {
      toast.success("cabin delete");
      queryclient.invalidateQueries({
        queryKey: ["cobins"],
      });
    },
  });

  return (
    <>
      <td className=" Row w-[100px] pl-0">
        <img className="h-[55px] w-full " src={cobin.image} alt="" />
      </td>
      <td className="Row w-[150px]">{cobin.name}</td>
      <td className="Row w-[250px]">fits up {cobin.maxcapacity} people</td>
      <td className="Row w-[150px]"> {cobin.regularPrice}$</td>
      <td className="Row w-[150px]">{cobin.discount}%</td>
      <td className="Row w-[150px]  ">
        <div className="flex gap-2 items-center justify-center">
          <Button content="DELETE" id={cobin.id} action={mutate} />
          <Modal>
            <Modal.open>
              <button className="btn rounded-2xl font-bold text-white bg-blue-800">
                update
              </button>
            </Modal.open>
            <Modal.Window>
              <Modal.close />
              <AddCobin defualtValue={cobin} id={cobin.id} />
            </Modal.Window>
          </Modal>
        </div>
      </td>
    </>
  );
}
