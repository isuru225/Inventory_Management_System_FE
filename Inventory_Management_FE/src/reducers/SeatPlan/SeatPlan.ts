import { SeatPlan } from "../../actions/Constants/Actions/SeatPlan.ts"
import { SeatPlanInitState } from "./States/InitState.ts"

export const SeatPlanReducer = (state = SeatPlanInitState, action: any) => {
    switch (action.type) {
        case SeatPlan.GET_SELECTED_MOVIE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case SeatPlan.GET_SELECTED_MOVIE_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case SeatPlan.GET_SELECTED_MOVIE_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case SeatPlan.GET_SELECTED_THEATER:
            return {
                ...state,
                theater: {
                    ...state.theater,
                    isLoading: true
                }
            }
        case SeatPlan.GET_SELECTED_THEATER_SUCCESS:
            return {
                ...state,
                theater: {
                    data: action.payload.data,
                    isLoading: false
                }
            }
        case SeatPlan.GET_SELECTED_THEATER_FAIL:
            return {
                ...state,
                theater: {
                    ...state.theater,
                    isLoading: false
                }
            }
        case SeatPlan.SET_SEAT_IDS:
            return {
                ...state,
                seatIds: action.payload.data
            };

        case SeatPlan.GET_SELECTED_THEATER:
            return {
                ...state,
                theater: {
                    ...state.theater,
                    isLoading: true
                }
            }
        case SeatPlan.GET_SELECTED_THEATER_SUCCESS:
            return {
                ...state,
                theater: {
                    data: action.payload.data,
                    isLoading: false
                }
            }
        case SeatPlan.GET_SELECTED_THEATER_FAIL:
            return {
                ...state,
                theater: {
                    ...state.theater,
                    isLoading: false
                }
            }
        case SeatPlan.ADD_BOOKING_INFO:
            return {
                ...state,
                bookingInfo: {
                    ...state.bookingInfo,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.ADD_BOOKING_INFO_SUCCESS:
            return {
                ...state,
                bookingInfo: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.ADD_BOOKING_INFO_FAIL:
            return {
                ...state,
                bookingInfo: {
                    ...state.bookingInfo,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.GET_RESERVED_SEATS_IDS:
            return {
                ...state,
                reservedSeatIds: {
                    ...state.reservedSeatIds,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.GET_RESERVED_SEATS_IDS_SUCCESS:
            return {
                ...state,
                reservedSeatIds: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.DELETE_BOOKING_INFO_FAIL:
            return {
                ...state,
                reservedSeatIds: {
                    ...state.reservedSeatIds,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.ADD_CLAIMS_TO_TOKEN:
            return {
                ...state,
                token: {
                    ...state.token,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.ADD_CLAIMS_TO_TOKEN_SUCCESS:
            return {
                ...state,
                token: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.ADD_CLAIMS_TO_TOKEN_FAIL:
            return {
                ...state,
                token: {
                    ...state.token,
                    isLoading: action.payload.isLoading
                }
            }
        case SeatPlan.GET_PERMANENTLY_RESERVED_SEATS_IDS:
            return {
                ...state,
                permReservedSeatIds : {
                    ...state.permReservedSeatIds,
                    isLoading : action.payload.isLoading
                }    
            }
        case SeatPlan.GET_PERMANENTLY_RESERVED_SEATS_IDS_SUCCESS:
            return {
                ...state,
                permReservedSeatIds : {
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case SeatPlan.GET_PERMANENTLY_RESERVED_SEATS_IDS_FAIL:
            return {
                ...state,
                permReservedSeatIds : {
                    ...state.permReservedSeatIds,
                    isLoading : action.payload.isLoading
                }    
            }
        default:
            return state;
    }
}