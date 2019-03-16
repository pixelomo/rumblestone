import { SET_PLAYERS } from "../actions/players";
import { fromJS, List } from "immutable";
import { playersData } from "../playersData";

const initialState = fromJS({
  list: playersData
});

const players = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return state.set("list", List(playersData));
    default:
      return state;
  }
};
export default players;