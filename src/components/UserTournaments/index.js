import { connect } from "react-redux";
import UserTournaments from "./UserTournaments";
import { handleDeleteUserTournament } from "./actions";
import { handleTournamentsListUpdate } from "../TournamentsList/actions";

export default connect(
  state => ({
    userTournaments: state.userTournaments
  }),
  {
    handleDeleteUserTournament,
    handleTournamentsListUpdate
  }
)(UserTournaments);
