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

<code>
export const setDataLoading = () => {
return {
type: "DATA_LOADING"
};
};
</code>
##example of redux thunk
<code>
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/indexReducer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
rootReducer,
initialState,
compose(
applyMiddleware(...middleware),
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
)
);

export default store;

</code>
