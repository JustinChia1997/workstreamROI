//function that takes in state and calculates new cost savings
const calculateNewSavings = (
  hires,
  sourcingCandidates,
  schedulingInterviews,
  onboarding,
  costs
) => {
  const result =
    (hires * (sourcingCandidates + schedulingInterviews + onboarding) * costs) /
    2;
  return result;
};

//function that takes in new cost savings and calculates array to display for bar chart
const getNewROI = (annualSavings) => {
  let tempROI = [];
  let tempSavings = annualSavings;
  for (let i = 0; i < 5; i += 1) {
    tempSavings *= 1.1;
    tempROI.push(Math.round(tempSavings));
  }
  return tempROI;
};

//currently all states are stored in the state object, without further division in the tree
//in an ideal state I would add further object keys, e.g roiVariables: {newHires...}
const variableReducer = (
  state = {
    newHires: 300,
    sourcingCandidates: 8,
    schedulingInterviews: 12,
    reducingNoShows: 30,
    onboarding: 8,
    daysToHire: 30,
    laborCosts: 18,
    annualSavings: 75600,
    newNoShow: 15,
    newDaysToFill: 9,
    roi: [83160, 91476, 100624, 110686, 121755],
  },
  action
) => {
  switch (action.type) {
    case "changeVariableValue":
      let tempState = { ...state };
      tempState[action.variableType] = action.newValue;
      tempState["annualSavings"] = calculateNewSavings(
        tempState.newHires,
        tempState.sourcingCandidates,
        tempState.schedulingInterviews,
        tempState.onboarding,
        tempState.laborCosts
      );
      tempState["newNoShow"] = tempState.reducingNoShows / 2;
      tempState["newDaysToFill"] = Math.round(tempState.daysToHire * 0.3);
      tempState["roi"] = getNewROI(tempState["annualSavings"]);
      return tempState;
    default:
      return state;
  }
};

export default variableReducer;
