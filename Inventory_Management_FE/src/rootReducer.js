import {combineReducers} from "redux"
import 
{
   changeState,
   updateSeatIDStringReducer,
   updateSelectedMovieIdReducer,
} 
from './reducer'
import 
{ 
    HomeReducer,
    LoginReducer,
    DashboardReducer,
    TasksReducer,
    RawDrugsReducer
  
} from "./reducers/index.ts"

 export default combineReducers({
    changeState,
    updateSeatIDStringReducer,
    updateSelectedMovieIdReducer,

     HomeReducer,
     LoginReducer,
     DashboardReducer,
     TasksReducer,
     RawDrugsReducer
 })