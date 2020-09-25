import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import filterSearchReducer from "./Reducers/filterSearchReducer";
import houseDescriptionReducer from "./Reducers/HouseDescriptionReducer";
import {
  houesOnSaleReducer,
  houseOnRentReducer,
} from "./Reducers/houseFetchReducer";
import rentReducer from "./Reducers/houseRentReducer";
import searchBoxReducer from "./Reducers/SearchBoxReducer";

const initialState = {};

const reducer = combineReducers({
  housesOnSale: houesOnSaleReducer,
  rentHouses: rentReducer,
  houseDetails: houseDescriptionReducer,
  filterSearchResult: filterSearchReducer,
  searchBoxResult: searchBoxReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
