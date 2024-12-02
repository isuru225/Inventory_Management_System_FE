import { ISeatPlanInterface , IBookingInfoData } from "../Interfaces/SeatPlanInterface.ts";

const bookingInfoData : IBookingInfoData = {
    seatList : [],
    bookingInfoId : 0
}

export const SeatPlanInitState : ISeatPlanInterface = {
    data : {},
    isLoading : false,
    theater : {
        data : {},
        isLoading : false
    },
    seatIds : "",
    bookingInfo : {
        data : bookingInfoData,
        isLoading : false
    }
    ,
    reservedSeatIds : {
        data : "",
        isLoading : false
    }
    ,
    token : {
        data : "",
        isLoading: false
    }
    ,
    permReservedSeatIds : {
        data : "",
        isLoading : false
    }
}
