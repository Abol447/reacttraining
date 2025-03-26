import { Link } from "react-router";

function Window({ titr }) {
  return (
    <Link to={titr.trim()}>
      <div className=" bg-gray-200 w-[200px] h-[200px] flex items-center justify-center rounded-2xl text-2xl font-bold hover:shadow-2xl hover:shadow-gray-700 hover:cursor-pointer">
        {titr}
      </div>
    </Link>
  );
}

export default Window;
