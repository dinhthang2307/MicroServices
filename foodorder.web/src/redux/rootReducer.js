import { combineReducers } from "redux"
 
import authReducer from "./auth"
 import itemReducer from "./item/action"
const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
})
 
export default rootReducer
 