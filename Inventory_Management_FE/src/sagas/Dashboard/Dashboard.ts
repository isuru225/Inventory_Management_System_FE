import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Dashboard } from "../../actions/Constants/Actions/Dashboard.ts";
import { DashboardActions } from "../../actions/Dashboard/Dashboard.ts";
import { DashboardService } from "../../services/Dashboard/index.ts";

export const DashboardSagas = {
  projectSpecificTasks : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
            DashboardService.projectSpecificTasks , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            DashboardActions.projectSpecificTasks.success(data)
          )
        }

      } catch (error) {
        yield put(
            DashboardActions.projectSpecificTasks.fail(error.response.data?.errorCode)
        );
      }
    },
  }
  ,
  employeeInfo : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
            DashboardService.getEmployeeInfo , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            DashboardActions.employeeInfo.success(data)
          )
        }

      } catch (error) {
        yield put(
            DashboardActions.employeeInfo.fail(error)
        );
      }
    },
  }
}

export default [
    takeLatest(
        Dashboard.GET_PROJECT_TASKS,
        DashboardSagas.projectSpecificTasks.get
    ),
    takeLatest(
        Dashboard.GET_EMPLOYEE_INFO,
        DashboardSagas.employeeInfo.get
    )
  ]