import { combineReducers } from "redux"
 
import authReducer from "./auth"
 import itemReducer from "./item/action"
 import invoiceSlice from "../components/features/invoice/invoiceSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  invoices : invoiceSlice
})
 
export default rootReducer
 