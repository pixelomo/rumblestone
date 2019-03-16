import { combineReducers } from "redux";
import players from "./players";
import voting from "./voting";
import region from "./region";
import user from "./user";

export default combineReducers({
  players,
  voting,
  user,
  region
});
