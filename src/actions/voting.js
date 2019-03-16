export const voteCast = (player) => {
  return (dispatch) => {
    dispatch({
      type: "VOTE_CAST",
      player: player
    });
  };
};

export const closeVoting = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_VOTING"
    });
  }
}

export const maxVotes = () => {
  return (dispatch) => {
    dispatch({
      type: "MAX_VOTES"
    });
  }
}