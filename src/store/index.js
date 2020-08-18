import {
    compose,
    createStore,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loadState, saveStateItem } from "../services/localStorage";

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  enhancer  
);

store.subscribe(() => {
  const { userTournaments } = store.getState();
  saveStateItem("userTournaments", {userTournaments});
});
