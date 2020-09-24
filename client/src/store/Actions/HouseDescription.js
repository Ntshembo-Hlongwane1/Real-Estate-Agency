import Axios from "axios";
import {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
} from "../actionTypes";

const houseDescriptionAction = (houseID) => async (dispatch) => {
  const dev_url = `http://127.0.0.1:5000/house/description/${houseID}`;
  const production_url = `/house/description/${houseID}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await Axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL });
  }
};

export default houseDescriptionAction;
