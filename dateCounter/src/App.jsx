import { useState } from "react";
import "./index.css";

let stepVar = 0;
function App() {
  return (
    <>
      <div className="form">
        <Step />
        <Dt />
      </div>
    </>
  );
}
export default App;
const Step = function () {
  const [St, SetStep] = useState(1);
  const StepPLus = function () {
    SetStep((st) => st + 1);
  };
  const StepMinus = function () {
    SetStep((st) => st - 1);
  };
  {
    stepVar = St;
  }
  return (
    <>
      <div className="step_rapper">
        <div onClick={StepMinus}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M1 10L1 6L15 6V10L1 10Z" fill="#000000"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="step_titr">Step:{St} </div>
        <div onClick={StepPLus}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
const Dt = function () {
  const [DateState, SetDate] = useState(0);
  const AddDate = () => {
    SetDate((dt) => dt + stepVar);
  };
  const LoseDate = () => {
    SetDate((dt) => dt - stepVar);
  };
  const today = new Date();
  today.setDate(today.getDate() + DateState);
  return (
    <>
      <div className="step_rapper">
        <div onClick={LoseDate} id="add">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M1 10L1 6L15 6V10L1 10Z" fill="#000000"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="step_titr"> Count: {DateState}</div>
        <div>
          <div onClick={AddDate} id="minuse">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="step_rapper">
        <h2 style={{ margin: "25px auto ", wordSpacing: "5px" }}>
          {DateState > 0
            ? DateState + "  " + "Days From"
            : DateState < 0
            ? DateState + "  " + "Days ago"
            : ""}{" "}
          Today Is{"  "}
          {today.toLocaleDateString()}
        </h2>
      </div>
    </>
  );
};
