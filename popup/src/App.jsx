import { useState } from "react";
import "./App.css";
const info = [
  {
    titr: "css",
    open: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntdolore aut. Eaque libero nisi ex asperiores doloribus recusandae fugain ipsa sit esse odio cum aut impedit ullam harum deleniti.",
  },
  {
    titr: "html",
    open: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntdolore aut. Eaque libero nisi ex asperiores doloribus recusandae fugain ipsa sit esse odio cum aut impedit ullam harum deleniti.",
  },
  {
    titr: "js",
    open: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntdolore aut. Eaque libero nisi ex asperiores doloribus recusandae fugain ipsa sit esse odio cum aut impedit ullam harum deleniti.",
  },
];
const toogle = (flag) => (flag ? false : true);
function App() {
  const [data, setData] = useState(info);
  const btnhandeller = (event) => {
    setData((x) =>
      x.map((y) =>
        y.titr === event.target.closest(".titr").id
          ? { ...y, open: toogle(y.open) }
          : { ...y, open: false }
      )
    );
  };

  console.log(data);
  return (
    <>
      {data.map((x) => (
        <PopUp key={x.titr}>
          <Titr id={x.titr}>
            <h1>{x.titr}</h1>
            <div onClick={(event) => btnhandeller(event)}>
              <svg
                style={{ cursor: "pointer" }}
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>plus</title> <desc>Created with Sketch Beta.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    sketch:type="MSPage"
                  >
                    {" "}
                    <g
                      id="Icon-Set-Filled"
                      sketch:type="MSLayerGroup"
                      transform="translate(-362.000000, -1037.000000)"
                      fill="#000000"
                    >
                      {" "}
                      <path
                        d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                        id="plus"
                        sketch:type="MSShapeGroup"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </Titr>
          <div className={x.open ? "" : "hid"}>{x.description}</div>
        </PopUp>
      ))}
    </>
  );
}

export default App;
const PopUp = ({ children }) => {
  return <div className="form"> {children}</div>;
};
const Titr = ({ id, children }) => {
  return (
    <div id={id} className="titr">
      {children}
    </div>
  );
};
