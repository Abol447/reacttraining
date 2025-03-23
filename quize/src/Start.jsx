import Button from "./Button";

function Start({ Start }) {
  return (
    <div className="flex flex-col gap-1 items-center font-bold">
      <div>welcome to react quize</div>
      <div>there is 15 question here to test your mastery</div>
      <Button click={Start} text="start" />
    </div>
  );
}

export default Start;
