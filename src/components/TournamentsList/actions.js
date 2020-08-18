export const FETCH_TOURNAMENTS_PENDING = "FETCH_TOURNAMENTS_PENDING";
export const FETCH_TOURNAMENTS_SUCCESS = "FETCH_TOURNAMENTS_SUCCESS";
export const FETCH_TOURNAMENTS_ERROR = "FETCH_TOURNAMENTS_ERROR";
export const TOURNAMENTS_RESET = "TOURNAMENTS_RESET";
export const HIDE_TOURNAMENTS_LIST = "HIDE_TOURNAMENTS_LIST";
export const SHOW_TOURNAMENTS_LIST = "SHOW_TOURNAMENTS_LIST";
export const TOURNAMENTS_LIST_UPDATE = "TOURNAMENTS_LIST_UPDATE";

const fetchTournamentsPending = () => ({
  type: FETCH_TOURNAMENTS_PENDING
});

const fetchTournamentsSuccess = payload => ({
  type: FETCH_TOURNAMENTS_SUCCESS,
  payload
});

const fetchTournamentsError = errorMsg => ({
  type: FETCH_TOURNAMENTS_ERROR,
  errorMsg
});

const tournamentsReset = () => ({
  type: TOURNAMENTS_RESET
});

const hideTournamentsList = () => ({
  type: HIDE_TOURNAMENTS_LIST
})

const showTournamentsList = () => ({
  type: SHOW_TOURNAMENTS_LIST
})

const tournamentsListUpdate = payload => ({
  type: TOURNAMENTS_LIST_UPDATE,
  payload
})

export const fetchTournaments = term => async (dispatch, getState) => {
  const {
    userTournaments: {
      userTournamentsList
    }
  } = getState();

  try {
    dispatch(fetchTournamentsPending());
    const res = await fetch(`https://api-search.win.gg/search?q=${term}&index=tournament`);

    if(!res.ok && res.status >= 400 && res.status <= 405) {
      throw new Error(`Request failed, status code: ${res.status}`);
    }

    const parsed = await res.json();

    if(parsed.errors) {
      throw new Error(parsed.message);
    }
  
    if(Array.isArray(parsed) && parsed[0]?.documents) {
      const fetchedTournaments = parsed[0].documents;
      // get user tournament ids
      const userTournamentsIds = userTournamentsList.map(({id}) => id);

      // data structure formating
      const tournamentsNew = fetchedTournaments.map(({id, title, description, images}) => ({
        id,
        title,
        description,
        imagePath: images?.square?.filePath || images?.default?.filePath
      }));

      return dispatch(fetchTournamentsSuccess({
        userTournamentsIds,
        tournamentsNew
      }));
    }

    throw new Error("Sorry, nothing found.");
  } catch (e) {
    dispatch(fetchTournamentsError(e.message));
    console.error(e.message);
  }
};

export const resetTournamentsInfo = () => dispatch => dispatch(tournamentsReset());
export const handleHideTournamentsList = () => dispatch => dispatch(hideTournamentsList())
export const handleShowTournamentsList = () => dispatch => dispatch(showTournamentsList())
export const handleTournamentsListUpdate = () => (dispatch, getState) => {
  const {
    userTournaments: {
      userTournamentsList
    }
  } = getState();

  const ids = userTournamentsList.map(({id}) => id);
  dispatch(tournamentsListUpdate(ids))
}
