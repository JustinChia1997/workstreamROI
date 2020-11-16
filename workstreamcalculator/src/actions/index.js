// change is a generic action object to store the correct information for reducer to function
export const change = (variableType, newValue) => {
  return {
    type: "changeVariableValue",
    variableType: variableType,
    newValue: newValue,
  };
};
