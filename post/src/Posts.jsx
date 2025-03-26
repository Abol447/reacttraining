import { useContext } from "react";
import Post from "./Post";
import Back from "./Back";
import PostContext from "./Postcontex";
function Posts() {
  const context = useContext(PostContext);
  return (
    <div className="flex flex-col items-center justify-baseline gap-2">
      <div className="px-5 gap-2 justify-baseline  py-2 flex flex-wrap">
        {context.posts.map((item) => (
          <Post titr={item.titr} description={item.description} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Posts;
