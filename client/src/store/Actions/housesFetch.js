import axios from "axios";
import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "../actionTypes";
export const houseOnSaleFetch = () => async (dispatch) => {
  const dev_url = "http://127.0.0.1:5000/house/sale";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(dev_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const locationSearchFilter = (location) => async (dispatch) => {
  const dev_url = `http://127.0.0.1:5000/house/location-filter/${location}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(dev_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const roomSearchFilter = (roomNO) => async (dispatch) => {
  const dev_url = `http://127.0.0.1:5000/house/room-filter/${roomNO}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(dev_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};
