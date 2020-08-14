import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_ERROR });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  //   const newSmurf = {
  //     name: smurf.name,
  //     age: smurf.age,
  //     height: smurf.height,
  //     id: Date.now(),
  //   };
  axios.post("http://localhost:3333/smurfs", smurf).then((res) => {
    console.log(res);
    dispatch({ type: ADD_SMURF, payload: res.data });
  });
};
