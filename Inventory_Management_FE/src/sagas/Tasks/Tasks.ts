import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Tasks } from "../../actions/Constants/Actions/Tasks.ts";
import { TasksActions } from "../../actions/Tasks/Tasks.ts";
import { TasksService } from "../../services/Tasks/index.ts";

export const TasksSagas = {
  projectSpecificTasks : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
            TasksService.projectSpecificTasks , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            TasksActions.projectSpecificTasks.success(data)
          )
        }

      } catch (error) {
        yield put(
            TasksActions.projectSpecificTasks.fail(error.response.data?.errorCode)
        );
      }
    },
  }
  
}

export default [
    takeLatest(
        Tasks.GET_PROJECT_TASKS,
        TasksSagas.projectSpecificTasks.get
    )
  ]