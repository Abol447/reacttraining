import Slide from "./slide";
import Button from "./Button";
import SwichRapper from "./SwichRapper";
import { useState } from "react";

const description = [
  "Tempor ullamco esse occaecat proident nostrud do nulla consequat enim ipsum. Ullamco fugiat enim veniam minim voluptate eiusmod dolor cupidatat aliqua proident dolor eu. Aute tempor excepteur fugiat irure reprehenderit exercitation ad ad. Ex veniam nostrud qui minim fugiat voluptate ad officia cupidatat sunt incididunt sint esse. Mollit velit enim velit eu sit excepteur culpa aliquip mollit laborum et exercitation eu exercitation. Id culpa exercitation eiusmod quis.",
  "Tempor ullamco esse occaecat proident nostrud do nulla consequat enim ipsum. Ullamco fugiat enim veniam minim voluptate eiusmod dolor cupidatat",
  "voluptate eiusmod dolor cupidatat aliqua proident dolor eu. Aute tempor excepteur fugiat irure reprehenderit exercitation ad ad. Ex veniam nostrud qui minim fugiat voluptate ad officia cupidatat sunt incididunt sint esse. Mollit velit enim velit eu sit excepteur culpa aliquip mollit laborum et exercitation eu exercitation. Id culpa exercitation eiusmod quis.",
];

function App() {
  const [index, seIndex] = useState(0);
  const clickHandeller = function (e) {
    console.log(e.target.id);
    seIndex(Number(e.target.id) - 1);
  };
  const preHandeller = function () {
    index > 0 ? seIndex((pre) => pre - 1) : "";
  };
  const nextHAndeller = function () {
    index < 2 ? seIndex((pre) => pre + 1) : "";
  };
  return (
    <>
      <div className="font-mono m-auto w-[500px] my-5">
        <SwichRapper>
          {Array.from({ length: 3 }, (_, i) => (
            <Button round="" key={i} id={i + 1} handeller={clickHandeller}>
              {i + 1}
            </Button>
          ))}
        </SwichRapper>
        <Slide key={index}>
          <span>{description[index]}</span>
          <div className="flex justify-between items-center">
            <Button handeller={preHandeller}>pre</Button>
            <Button handeller={nextHAndeller}>next</Button>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default App;
