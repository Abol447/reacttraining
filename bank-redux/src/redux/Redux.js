import customerReducer from "../customer/customerSlice";
import { applyMiddleware, combineReducers, createStore } from "redux";
import operationReduser from "../operation/operationSlice";
import Apireducer from "../Api.Slice";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({
  customer: customerReducer,
  operation: operationReduser,
  api: Apireducer,
});
const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
