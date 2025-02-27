import Button from "./Button";
function Friends({ name, color, handeller, bill, flag }) {
  return (
    <div className="flex items-center justify-between ">
      <div className="bg-amber-100 w-15 h-15 rounded-full"></div>
      <div className="flex flex-col ">
        <span>{name}</span>
        <span style={{ color: color }}>
          {" "}
          {bill == 0
            ? "You and " + name + " are even"
            : color == "green"
            ? name + " own you " + bill
            : "you own " + name + " " + bill}
        </span>
      </div>
      <Button
        id={name}
        w="80px"
        txt={flag ? "close" : "choose"}
        handeller={handeller}
      />
    </div>
  );
}

export default Friends;
