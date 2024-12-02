import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { RawDrugs } from "../../actions/Constants/Actions/RawDrugs.ts";
import { RawDrugsActions } from "../../actions/RawDrugs/index.ts";
import { RawDrugsService } from "../../services/RawDrugs/index.ts";

export const RawDrugsSagas = {
  rawDrugItems : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
            RawDrugsService.getAllRawDrugs , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            RawDrugsActions.allRawDrugItems.success(data)
          )
        }

      } catch (error) {
        yield put(
            RawDrugsActions.allRawDrugItems.fail(error.response.data?.errorCode)
        );
      }
    },
    add : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
            RawDrugsService.addNewDrug , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            RawDrugsActions.addNewDrugItem.success(data)
          )
        }

      } catch (error) {
        yield put(
            RawDrugsActions.addNewDrugItem.fail(error.response.data?.errorCode)
        );
      }
    },
    edit : function* (action: any) {
      
      try {
        const { data, status } = yield call(
            RawDrugsService.editRawDrug , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            RawDrugsActions.editRawDrugItem.success(data)
          )
        }
      } catch (error) {
        yield put(
            RawDrugsActions.editRawDrugItem.fail(error.response.data?.errorCode)
        );
      }
    }
  }
  ,

}

export default [
    takeLatest(
        RawDrugs.GET_RAW_DRUG_ITEM,
        RawDrugsSagas.rawDrugItems.get
    )
    ,
    takeLatest(
      RawDrugs.ADD_NEW_RAW_DRUG_ITEM,
      RawDrugsSagas.rawDrugItems.add
  )
  ]