import { fromJS, List } from "immutable";
import { playersData } from "../playersData";

const initialState = fromJS({
  list: playersData
});

const players = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return state.set("list", List(playersData));
    case "VOTE_CAST": {
      let arr = state.get("list")
      let newList = arr.update(
        arr.findIndex(function(item) { 
          return item.get("nickname") === action.player.nickname; 
        }), function(item) {
          return item.set("likes", action.player.likes + 1);
        }
      ); 
      return state.set("list", newList);
    }
    default:
      return state;
  }
};
export default players;