import { useReducer } from "react";
import reducer from "./component/reducer.jsx";
import { ADD_NUM, OPERATOR, CLEAR, CALC } from "./component/actions.jsx";
//  using the useReducer and a lot of structuring  was heavily thanks to Web Dev Simplified's tutorials.
import "./App.css";

const defaultState = {
  dig: " ",
  prevDig: 0,
  operation: "",
  negative: false,
};

const NumButton = ({ dispatch, digit }) => {
  const id = idToWord(digit);

  return (
    <button
      onClick={() => dispatch({ type: ADD_NUM, payload: { num: digit } })}
      id={id}
    >
      {digit}
    </button>
  );
};
const OpButton = ({ dispatch, operation }) => {
  const id = idToWord(operation);
  return (
    <button
      onClick={() => dispatch({ type: OPERATOR, payload: { operation } })}
      id={id}
    >
      {operation}
    </button>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { dig, prevDig, operation } = state;
  return (
    <div className="calculator-case">
      <div className="ds-outer-background">
        <div className="display-screen">
          <p>{operation}</p>
          <p id="display">{dig}</p>
        </div>
        <p className="signature">Programmed by Gage Smith. 2023</p>
      </div>

      <div className="button-pad">
        <button id="clear" onClick={() => dispatch({ type: CLEAR })}>
          AC
        </button>
        <button id="equals" onClick={() => dispatch({ type: CALC })}>
          =
        </button>

        <NumButton digit="7" dispatch={dispatch} />
        <NumButton digit="8" dispatch={dispatch} />
        <NumButton digit="9" dispatch={dispatch} />
        <OpButton operation="-" dispatch={dispatch} id="minus" />

        <NumButton digit="4" dispatch={dispatch} />
        <NumButton digit="5" dispatch={dispatch} />
        <NumButton digit="6" dispatch={dispatch} />
        <OpButton operation="+" dispatch={dispatch} id="add" />

        <NumButton digit="1" dispatch={dispatch} />
        <NumButton digit="2" dispatch={dispatch} />
        <NumButton digit="3" dispatch={dispatch} />
        <OpButton operation="*" dispatch={dispatch} id="multiply" />

        <NumButton digit="0" dispatch={dispatch} />
        <NumButton digit="." dispatch={dispatch} />
        <OpButton operation="/" dispatch={dispatch} id="divide" />
      </div>
    </div>
  );
}

export default App;

const idToWord = (id) => {
  switch (id) {
    case "0":
      return "zero";
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
    case "/":
      return "divide";
    case "*":
      return "multiply";
    case "+":
      return "add";
    case "-":
      return "subtract";
    case ".":
      return "decimal";
    default:
      return id;
  }
};
