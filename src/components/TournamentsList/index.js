import { connect } from "react-redux";
import TournamentsList from "./TournamentsList";
import {
  fetchTournaments,
  resetTournamentsInfo,
  handleHideTournamentsList,
  handleShowTournamentsList,
  handleTournamentsListUpdate
} from "./actions";
import { handleAddUserTournament } from "../UserTournaments/actions";

export default connect(
  state => ({
    tournaments: state.tournaments
  }),
  {
    fetchTournaments,
    resetTournamentsInfo,
    handleHideTournamentsList,
    handleShowTournamentsList,
    handleTournamentsListUpdate,
    handleAddUserTournament
  }
)(TournamentsList);