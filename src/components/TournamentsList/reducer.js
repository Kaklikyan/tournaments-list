import {
  FETCH_TOURNAMENTS_PENDING,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_ERROR,
  TOURNAMENTS_RESET,
  HIDE_TOURNAMENTS_LIST,
  SHOW_TOURNAMENTS_LIST,
  TOURNAMENTS_LIST_UPDATE
} from "./actions";

const initialState = {
    pending: false,
    tournamentsList: [],
    tournamentsListUpdatable: [],
    errorMsg: null,
    isListVisible: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOURNAMENTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TOURNAMENTS_SUCCESS:
            return {
                pending: false,
                tournamentsList: action.payload.tournamentsNew,
                tournamentsListUpdatable: action.payload.tournamentsNew.filter(tournament => !action.payload.userTournamentsIds.includes(tournament.id)),
                errorMsg: null,
                isListVisible: true
            }
        case FETCH_TOURNAMENTS_ERROR:
            return {
                pending: false,
                tournamentsList: [],
                tournamentsListUpdatable: [],
                errorMsg: action.errorMsg
            }
        case TOURNAMENTS_LIST_UPDATE: 
            return {
              ...state,
              tournamentsListUpdatable: state.tournamentsList.filter(tournament => !action.payload.includes(tournament.id))
            }
        case HIDE_TOURNAMENTS_LIST:
            return {
              ...state,
              isListVisible: false
            }
        case SHOW_TOURNAMENTS_LIST:
            return {
              ...state,
              isListVisible: true
            }
        case TOURNAMENTS_RESET:
            return initialState;
        default: 
            return state;
    }
}
