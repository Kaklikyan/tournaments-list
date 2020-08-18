import { combineReducers } from "redux";
import tournaments from "../components/TournamentsList/reducer";
import userTournaments from "../components/UserTournaments/reducer";

export default combineReducers({
  tournaments,
  userTournaments
});
