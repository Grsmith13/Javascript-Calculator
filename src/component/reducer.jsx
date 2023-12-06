import { ADD_NUM, OPERATOR, CLEAR, CALC } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NUM:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          dig: action.payload.num,
        };
      }
      if (action.payload.num === "0" && state.dig === "0") return state;
      if (action.payload.num === "." && state.dig.includes(".")) return state;

      return {
        ...state,
        dig: `${state.dig || " "}${action.payload.num}`,
      };
    case OPERATOR:
      if (state.dig === null && state.prevDig === null) return state;
      if (state.dig === null) {
        if (action.payload.operation === "-") {
          return {
            ...state,
            negative: true,
            operation: state.operation,
            dig: "-",
          };
        }
        return {
          ...state,
          operation: action.payload.operation,
        };
      }

      if (state.dig === "-") {
        return {
          ...state,
          dig: null,
          operation: action.payload.operation,
        };
      }
      if (state.prevDig === null) {
        return {
          ...state,
          prevDig: state.dig,
          dig: null,
          operation: action.payload.operation,
        };
      }
      return {
        ...state,
        dig: null,
        operation: action.payload.operation,
        prevDig: calculations(state),
      };
    case CLEAR:
      return {
        ...state,
        dig: 0,
        prevDig: null,
      };
    case CALC:
      if (
        state.operation === null ||
        state.dig === null ||
        state.prevDig === null
      )
        return state;
      return {
        ...state,
        dig: calculations(),
        operation: null,
        overwrite: true,
        prevDig: null,
      };
    default:
      return state;
  }

  function calculations() {
    const pre = parseFloat(state.prevDig);
    const cur = parseFloat(state.dig);
    if (isNaN(pre) || isNaN(cur)) return "";
    let calc = "";

    switch (state.operation) {
      case "+":
        calc = pre + cur;
        break;
      case "-":
        calc = pre - cur;
        break;
      case "*":
        calc = pre * cur;
        break;
      case "/":
        calc = pre / cur;
        break;
    }
    return calc.toString();
  }
};

export default reducer;


