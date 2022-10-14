import { SORT, FETCH } from "../../constants";
import axios from "axios";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetchAction = data => {
  return {
    type: FETCH,
    data
  };
};

// Uploaded provided JSON file (Webdev_data.json) to myjson.com to test API call.
export function fetchData() {
  return dispatch => {
    return axios
      .get("https://mocki.io/v1/bc8c6599-8333-4d22-a6bc-f11b0eb22c38")
      .then(res => {
        const data = JSON.parse(res.request.response)[0];
        return dispatch(fetchAction(data));
      })
      .catch(err => {
        console.log(err);
        return dispatch(fetchAction({}));
      });
  };
}
