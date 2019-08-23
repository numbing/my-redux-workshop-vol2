# hello and welcome to my workshop vol.2

## here is example for action

export const getData = () => dispatch => {

dispatch(setDataLoading());
axios.get("https://swapi.co/api/people").then(res =>
dispatch({
type: "GET_DATA",
payload: res.data
})
);
};

//
export const setDataLoading = () => {
return {
type: "DATA_LOADING"
};
};
