import {
  ADD_USER_TOURNAMENT,
  DELETE_USER_TOURNAMENT
} from "./actions";

const initialState = {
    userTournamentsList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER_TOURNAMENT:
            return {
                ...state,
                userTournamentsList: [
                  ...state.userTournamentsList,
                  action.payload
                ]
            }
        case DELETE_USER_TOURNAMENT:
            return {
                ...state,
                userTournamentsList: state.userTournamentsList.filter(userTournament => userTournament.id !== action.payload)
            }
        default: 
            return state;
    }
}
