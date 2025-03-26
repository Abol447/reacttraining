import { useContext, useReducer } from "react";
import PostContext from "./Postcontex";
import Back from "./Back";
const reducer = function (post, action) {
  if (action.type == "titr") {
    return { ...post, titr: action.payload };
  } else if (action.type == "reset") {
    return { ...post, titr: "", description: "" };
  } else {
    return { ...post, description: action.payload };
  }
};

function Addpost() {
  const { addpost } = useContext(PostContext);
  const [post, dispatch] = useReducer(reducer, { titr: "", description: "" });
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <form
        action=""
        className="flex items-center bg-gray-200 w-[450px] justify-center p-5  rounded-2xl m-auto mt-5 flex-col gap-2"
      >
        <div className="w-[80%] flex gap-2 items-center justify-between">
          <span>Title</span>
          <input
            onChange={(e) => {
              dispatch({ type: "titr", payload: e.target.value });
            }}
            value={post.titr}
            type="text"
            className="border-2 outline-0 w-[200px] "
          />
        </div>
        <div className="flex items-center gap-2 justify-between w-[80%] ">
          <span>Descripyion</span>
          <textarea
            onChange={(e) => {
              dispatch({ type: "description", payload: e.target.value });
            }}
            value={post.description}
            className="border-2 w-[200px] "
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addpost(post);
            dispatch({ type: "reset" });
          }}
          className="border-2 w-[80%] py-1 bg-gray-300 hover:shadow hover:shadow-gray-600 hover:cursor-pointer"
        >
          {" "}
          Add
        </button>
      </form>
      <Back />
    </div>
  );
}

export default Addpost;
