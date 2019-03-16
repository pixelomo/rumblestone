export const voteCast = (player) => {
  return (dispatch, getState) => {
    dispatch({
      type: "VOTE_CAST",
      player: player
    });

    // if (turns === 3) {
    //   dispatch({ type: "END_VOTING" });
    // }
  };
};

export const closeVoting = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_VOTING"
    });
  }
}