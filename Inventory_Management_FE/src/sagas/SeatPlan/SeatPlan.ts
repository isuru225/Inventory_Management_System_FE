import { SeatPlan } from "../../actions/Constants/Actions/SeatPlan.ts";
import { SeatPlanAction } from "../../actions/SeatPlan/SeatPlan.ts";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { SeatPlanService } from "../../services/SeatPlan/index.ts";

export const SeatPlanSagas = {
    selectedMovieRecord: {
        get: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.getSelectedMovie, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.selectedMovieRecord.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.selectedMovieRecord.fail(new Error()));
            }
        },
    }
    ,
    selectedTheaterRecord: {
        get: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.getSelectedTheater, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.selectedTheater.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.selectedTheater.fail(new Error()));
            }
        },
    }
    ,
    bookingInfo: {
        add: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.addBookingDetails, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.bookingInfo.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.bookingInfo.fail(new Error()));
            }
        }
    }
    ,
    bookingInfoRemove: {
        delete: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.addBookingDetails, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.bookingInfo.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.bookingInfo.fail(new Error()));
            }
        }
    }
    ,
    reservedSeatIds: {
        get: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.getReservedSeatIds, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.reservedSeatIds.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.reservedSeatIds.fail(new Error()));
            }
        }
    }
    ,
    addTokenClaims: {
        add: function* (action: any) {
            try {
                const { data, status } = yield call(
                    SeatPlanService.addTokenClaims, action.payload.data
                );
                console.log("Mora", data)
                if (status == 200) {
                    localStorage.setItem('token', data?.data);
                    yield put(
                        SeatPlanAction.addTokenClaims.success(data)
                    )
                }
            } catch (error) {
                yield put(SeatPlanAction.addTokenClaims.fail(new Error()));
            }
        }
    }
    ,
    permReservedSeatIds : {
        get : function* (action: any){
            try {
                const { data, status } = yield call(
                    SeatPlanService.getPermReservedSeatIds, action.payload.data
                );
                if (status == 200) {
                    yield put(
                        SeatPlanAction.getPermanentlyReservedSeats.success(data)
                    )
                }

            } catch (error) {
                yield put(SeatPlanAction.getPermanentlyReservedSeats.fail(new Error()));
            }
        }
    }
}

export default [
    takeLatest(
        SeatPlan.GET_SELECTED_MOVIE,
        SeatPlanSagas.selectedMovieRecord.get
    )
    ,
    takeLatest(
        SeatPlan.GET_SELECTED_THEATER,
        SeatPlanSagas.selectedTheaterRecord.get
    )
    ,
    takeLatest(
        SeatPlan.ADD_BOOKING_INFO,
        SeatPlanSagas.bookingInfo.add
    )
    ,
    takeLatest(
        SeatPlan.GET_RESERVED_SEATS_IDS,
        SeatPlanSagas.reservedSeatIds.get
    )
    ,
    takeLatest(
        SeatPlan.ADD_CLAIMS_TO_TOKEN,
        SeatPlanSagas.addTokenClaims.add
    )
    ,
    takeLatest(
        SeatPlan.GET_PERMANENTLY_RESERVED_SEATS_IDS,
        SeatPlanSagas.permReservedSeatIds.get
    )
]