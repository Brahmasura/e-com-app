// creating store 

import { createStore } from "redux";
import {compose, applyMiddleware} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


// next line is a middleware 
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

