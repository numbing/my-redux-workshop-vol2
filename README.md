# hello and welcome to my workshop vol.2

## here is example for action

<code>export const getData = () => dispatch => {

dispatch(setDataLoading());
axios.get("https://swapi.co/api/people").then(res =>
dispatch({
type: "GET_DATA",
payload: res.data
})
);
};
</code>

//
<code>
export const setDataLoading = () => {
return {
type: "DATA_LOADING"
};
};
</code>
