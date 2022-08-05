import { combineReducers } from "redux";
import layoutUIReducer from "./layoutUI" ; 
import lessonReducer from "./lessons" ; 

export default combineReducers({
    layoutUI : layoutUIReducer , 
    lessons : lessonReducer , 
})