import customerReducer from "../customer/customerSlice";
import { combineReducers, createStore } from "redux";
import operationReduser from "../operation/operationSlice";
const rootreducer = combineReducers({
  customer: customerReducer,
  operation: operationReduser,
});
const store = createStore(rootreducer);

export default store;
