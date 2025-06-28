import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <ClipLoader color="#3b82f6" size={40} />
    </div>
  );
}
