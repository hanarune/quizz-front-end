import reducer from "./reducer";
import initial from "./initial";
import { createStore, applyMiddleware, compose } from "redux";
//import thunk from "redux-thunk";


const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware())
);

export default store;