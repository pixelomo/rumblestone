import { fromJS } from "immutable";

const initialState = fromJS({
  votesCast: 0,
  votingClosed: false,
  maxVotes: false
});

const voting = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_CAST":
      return state.set("votesCast", state.get("votesCast") + 1);
    case "CLOSE_VOTING":
      return state.set("votingClosed", true);
    case "MAX_VOTES":
      return state.set("maxVotes", true);
    default:
      return state;
  }
};

export default voting;