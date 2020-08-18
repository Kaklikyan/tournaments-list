export const ADD_USER_TOURNAMENT = "ADD_USER_TOURNAMENT";
export const DELETE_USER_TOURNAMENT = "DELETE_USER_TOURNAMENT";

const addUserTournament = payload => ({
  type: ADD_USER_TOURNAMENT,
  payload
});

const deleteUserTournament = payload => ({
  type: DELETE_USER_TOURNAMENT,
  payload
});

export const handleAddUserTournament = tournament => dispatch => dispatch(addUserTournament(tournament));
export const handleDeleteUserTournament = tournamentId => dispatch => dispatch(deleteUserTournament(tournamentId));
