import {
  SET_USER,
  LOGOUT_USER,
} from "../actions/user";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  name: '',
  loggedIn: false
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return state.set("name", action.user).set("loggedIn", true)
    case "LOGOUT_USER":
      return state.set("name", state.name).set("loggedIn", false)
    default:
      return state;
  }
};
export default user;