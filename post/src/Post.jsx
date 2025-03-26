function Post({ titr, description }) {
  return (
    <div className="p-2 rounded-2xl bg-gray-200 w-[200px] h-[200px]">
      <div className="font-bold text-xl">{titr}</div>
      <div className="overflow-hidden h-[80%]">{description}</div>
    </div>
  );
}

export default Post;
