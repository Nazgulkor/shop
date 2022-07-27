let initState = {
  currentMinValue: 1,
  currentMaxValue: 1100,
};

let ranger = (state = initState, action) => {
  if ((action.type === "SET_MIN_VALUE")) {
    return { ...state,
       currentMinValue: action.payload };
  }
  if ((action.type === "SET_MAX_VALUE")) {
    return { ...state,
       currentMaxValue: action.payload };
  }
  return state
};


export default ranger;