import { useNavigate } from "react-router";

function Back() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="border-2 flex items-center justify-center w-[100px] bg-gray-200 rounded-2xl hover:cursor-pointer hover:shadow hover:shadow-gray-500 "
    >
      back
    </div>
  );
}

export default Back;
