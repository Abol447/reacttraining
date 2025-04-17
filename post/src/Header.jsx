import Window from "./Window";

function Header() {
  return (
    <div className="flex gap-10 justify-center mt-5">
      <Window titr="posts" />
      <Window titr="addPost" />
    </div>
  );
}

export default Header;
