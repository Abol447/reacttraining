import { useMutation } from "@tanstack/react-query";
import { logOutRec } from "../../../Data/request/LoginRequest";
import { replace, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logOutRec,
    onSuccess: () => {
      navigate("/login", replace(true));
      toast.success("user logout successfully");
      sessionStorage.clear();
    },
  });
  return { logout, isPending };
}
