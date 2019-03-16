import { SET_PLAYERS } from "../actions/players";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  votesCast: 0,
  votingClosed: false
});

const voting = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_CAST":
      return state.set("votesCast", state.get("votesCast") + 1);
    case "CLOSE_VOTING":
      return state.set("votingClosed", true);
    default:
      return state;
  }
};

export default voting;

// player.nickname
// player.likes ++