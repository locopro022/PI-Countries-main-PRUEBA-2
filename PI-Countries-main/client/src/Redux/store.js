import {createStore} from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { compose } from "redux";

//primer parametro siempre el reducer
//segundo parametro el applyMiddleware con thunk y su configuracion de redux devtool

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);




export default store;