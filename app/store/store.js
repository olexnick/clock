import projectReducer from "../reducers/projectReducer.js";

import { applyMiddleware, createStore, compose } from "redux";
import reducers from "../reducers/projectReducer.js";

import promiseMib from "redux-promise-middleware";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

const finalCreateStore = compose(applyMiddleware(
	promise, promiseMib(), thunk, logger
), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);


export default finalCreateStore(projectReducer);
