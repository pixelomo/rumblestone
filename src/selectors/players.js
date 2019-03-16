import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

const playersSelector = state => {
  return state.players.get("list").toJS();
};
export const selectPlayers = createDeepEqualSelector([playersSelector], players => {
  return players;
});