import Star from "./Star";
import Button from "./Button";

function RatingStar({ starHandeller, fill, movieStar }) {
  return (
    <div className="mt-5 bg-gray-600 w-[80%] m-auto p-5 flex flex-col gap-2 items-center justify-center">
      <Star starHandeller={starHandeller} movieStar={movieStar} fill={fill} />
      <Button txt="Add To Movie List" />
    </div>
  );
}

export default RatingStar;
