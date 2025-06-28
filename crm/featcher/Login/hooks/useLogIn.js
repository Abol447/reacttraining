import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../../Data/request/LoginRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogIn() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => logIn(email, password),
    onSuccess: () => {
      toast.success("you loged in");
      navigate("/");
    },
    onError: () => {
      toast.error("your password or email is wrong");
    },
  });
  return { login, isPending };
}
