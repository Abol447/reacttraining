import { useReducer, useState, useEffect } from "react";
import Start from "./Start";
import Question from "./Question";
import Button from "./Button";
import Timer from "./Timer";
import Option from "./Option";
import Fotter from "./Fotter";
import Point from "./Point";

const data = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What's the name of the syntax we use to describe the UI in React components?",
    options: ["FBJ", "Babel", "JSX", "ES2015"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How does data flow naturally in React apps?",
    options: [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How to pass data into a child component?",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "When to use derived state?",
    options: [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: "What triggers a UI re-render in React?",
    options: [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    question: 'When do we directly "touch" the DOM in React?',
    options: [
      "When we need to listen to an event",
      "When we need to change the UI",
      "When we need to add styles",
      "Almost never",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question: "In what situation do we use a callback to update state?",
    options: [
      "When updating the state will be slow",
      "When the updated state is very data-intensive",
      "When the state update should happen faster",
      "When the new state depends on the previous state",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question:
      "If we pass a function to useState, when will that function be called?",
    options: [
      "On each re-render",
      "Each time we update the state",
      "Only on the initial render",
      "The first time we update the state",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "Which hook to use for an API request on the component's initial render?",
    options: ["useState", "useEffect", "useRef", "useReducer"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which variables should go into the useEffect dependency array?",
    options: [
      "Usually none",
      "All our state variables",
      "All state and props referenced in the effect",
      "All variables needed for clean up",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "An effect will always run on the initial render.",
    options: [
      "True",
      "It depends on the dependency array",
      "False",
      "In depends on the code in the effect",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "When will an effect run if it doesn't have a dependency array?",
    options: [
      "Only when the component mounts",
      "Only when the component unmounts",
      "The first time the component re-renders",
      "Each time the component is re-rendered",
    ],
    correctOption: 3,
    points: 20,
  },
];

const optionStyle = {
  noneopt:
    "bg-gray-500 font-bold border-2 border-gray-950 w-[100%] rounded-2xl px-3 py-1",
  act: "bg-gray-600 font-bold border-2 border-gray-950 w-[100%] rounded-2xl px-3 py-1",
  correct:
    "bg-blue-800 font-bold border-2 border-gray-950 w-[100%] rounded-2xl px-3 py-1 ml-5",
  selected:
    "bg-gray-600 font-bold border-2 border-gray-950 w-[100%] rounded-2xl px-3 py-1 ml-5",
  anwser:
    "bg-blue-800 font-bold border-2 border-gray-950 w-[100%] rounded-2xl px-3 py-1 ",
};
const defultStyle = {
  1: optionStyle.noneopt,
  2: optionStyle.noneopt,
  3: optionStyle.noneopt,
  4: optionStyle.noneopt,
};
const reducer = function (state, action) {
  if (action.type == "selectopt") {
    let newstyle = {
      1: optionStyle.act,
      2: optionStyle.act,
      3: optionStyle.act,
      4: optionStyle.act,
    };
    if (action.playload[0] == action.playload[1] + 1) {
      return {
        ...state,
        optstyle: {
          ...newstyle,
          [action.playload[1] + 1]: optionStyle.correct,
        },
        points: state.points + action.playload[2],
      };
    } else {
      return {
        ...state,
        optstyle: {
          ...newstyle,
          [action.playload[1] + 1]: optionStyle.anwser,
          [action.playload[0]]: optionStyle.selected,
        },
      };
    }
  } else if (action.type == "next") {
    return { ...state, number: state.number++, optstyle: defultStyle };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, {
    optstyle: defultStyle,
    points: 0,
    number: 1,
  });
  const [question, setQuestion] = useState(data[state.number - 1]);
  useEffect(() => {
    setQuestion(data[state.number - 1]);
  }, [state.number]);
  const [anwser, setAnwser] = useState(0);
  const anwserHandeller = function (event) {
    if (anwser == 0) {
      setAnwser(() => Number(event.target.id));
      dispatch({
        type: "selectopt",
        playload: [
          Number(event.target.id),
          question.correctOption,
          question.points,
        ],
      });
    }
  };
  const [start, setStart] = useState(false);
  const startHandeller = function () {
    setStart(true);
  };

  return (
    <div className=" p-10 rounded-2xl bg-gray-300 mx-auto mt-10 font-mono w-[500px] flex  flex-col items-center">
      <div className="font-bold  text-3xl mb-6">react quize</div>
      {start ? (
        <div className="flex flex-col gap-2">
          <Point number={state.number}>
            <div>{state.number}/15</div>
            <div>{state.points}/280 points</div>
          </Point>
          <Question qu={question.question}>
            {question.options.map((item, index) => (
              <Option
                click={anwserHandeller}
                id={index + 1}
                style={state.optstyle[index + 1]}
                key={index}
              >
                {item}
              </Option>
            ))}
          </Question>
          <Fotter>
            <Timer secends={480} />{" "}
            {anwser > 0 && state.number < 15 ? (
              <Button
                text="next"
                click={() => {
                  dispatch({ type: "next" });
                  setAnwser(0);
                }}
              />
            ) : (
              ""
            )}
          </Fotter>
        </div>
      ) : (
        <Start Start={startHandeller} />
      )}
    </div>
  );
}

export default App;
