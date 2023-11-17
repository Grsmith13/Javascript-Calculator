import { ACTIONS } from "../App";

const DigitButton = ({ dispatch, digit }) => {
  const digitName = getDigitName(digit);
  return (
    <button
      id={digitName}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

const getDigitName = (digit) => {
  const digitNames = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    ".": "decimal",
  };

  return digitNames[digit];
};
export default DigitButton;
