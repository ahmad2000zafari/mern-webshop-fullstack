import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import favoritesReducer from "./favoritesReducer";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
