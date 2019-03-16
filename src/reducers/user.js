import { fromJS } from "immutable";

const initialState = fromJS({
  name: '',
  loggedIn: false,
  reset: false
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return state.set("name", action.user).set("loggedIn", true)
    case "LOGOUT_USER":
      return state.set("name", state.name).set("loggedIn", false).set("reset", true)
    default:
      return state;
  }
};
export default user;