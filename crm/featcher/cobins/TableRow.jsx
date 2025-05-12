import React from "react";
import Button from "../../Public/Button";
import { deletCobins } from "../../Data/request/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
      <td className=" Row w-[100px] flex items-center justify-center pl-0">
        <img className="h-[55px] " src={cobin.image} alt="" />
      </td>
      <td className="Row w-[150px]">{cobin.name}</td>
      <td className="Row w-[250px]">fits up {cobin.maxcapacity} people</td>
      <td className="Row w-[150px]"> {cobin.regularPrice}$</td>
      <td className="Row w-[150px]">{cobin.discount}%</td>
      <td className="Row w-[150px]  ">
        <div className="flex gap-2 items-center justify-center">
          <Button content="DELETE" id={cobin.id} action={mutate} />
          <Button content="update" action={action} id={cobin.id} gray={gray} />
        </div>
      </td>
    </>
  );
}
