const {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
} = require("../actionTypes");

const rentReducer = (state = { rentHouses: [] }, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { loading: true };
    case FETCH_HOUSE_SUCCESS:
      return { loading: false, rentHouses: action.payload };
    case FETCH_HOUSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rentReducer;
