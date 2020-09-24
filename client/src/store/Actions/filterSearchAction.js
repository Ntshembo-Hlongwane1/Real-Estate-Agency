import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "../actionTypes";
import axios from "axios";
const filterSearchAction = (location) => async (dispatch) => {
  const dev_url = `http://127.0.0.1:5000/house/${location}`;
  const production_url = `/house/${location}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export default filterSearchAction;
