import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

// Get all rooms
/**
 * 
 * @param {*} req
 * If we need server side rendering then we need predefine origin path of API
 * Otherwise getServerSide rendering from next.js not going to work
 * If we use useEffect from React.useEffect we don't need origin from absoluteUrl
 * but the pre-rending not going to work 
 * @returns 
 */
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
