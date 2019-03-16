const regionState = "";

const region = (prevState = regionState, action) => {
  if (action.type === "SET_REGION") {
    return action.region;
  }
  return prevState;
};

export default region;