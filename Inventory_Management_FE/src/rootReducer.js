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
    RawDrugsReducer,
    StoreKeeperReducer,
    HistoryReducer
  
} from "./reducers/index.ts"

 export default combineReducers({
    changeState,
    updateSeatIDStringReducer,
    updateSelectedMovieIdReducer,

     HomeReducer,
     LoginReducer,
     DashboardReducer,
     TasksReducer,
     RawDrugsReducer,
     StoreKeeperReducer,
     HistoryReducer
 })