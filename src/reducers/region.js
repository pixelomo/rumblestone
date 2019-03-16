import { fromJS } from "immutable";

const initialState = fromJS({
  name: '',
  disabled: 0
});

const region = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGION":
      return state.set("name", action.region).set("disabled", 1)
    case "LOGOUT_USER":
      return state.set("name", '').set("disabled", 0)
    case "CLOSE_VOTING":
      return state.set("disabled", 0)
    default:
      return state;
  }
};
export default region;