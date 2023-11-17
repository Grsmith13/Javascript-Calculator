import { ACTIONS } from "../App";

const OperationButton = ({ dispatch, operation }) => {
  const operationName = getOperationName(operation);
  return (
    <button
      id={operationName}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};
const getOperationName = (operation) => {
  const operationNames = {
    "+": "add",
    "-": "subtract",
    x: "multiply",
    "/": "divide",
  };

  return operationNames[operation];
};
export default OperationButton;
