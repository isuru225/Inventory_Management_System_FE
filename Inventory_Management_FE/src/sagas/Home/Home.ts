import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Home } from "../../actions/Constants/Actions/Home.ts";
import { HomeActions } from "../../actions/Home/Home.ts";
import { HomeService } from "../../services/Home/index.ts";

export const HomeSagas = {
  allProjects : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
          HomeService.getAllProjects , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            HomeActions.allProjects.success(data)
          )
        }

      } catch (error) {
        yield put(
            HomeActions.allProjects.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
    takeLatest(
      Home.GET_ALL_PROJECTS,
      HomeSagas.allProjects.get
    )
  ]