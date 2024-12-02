export interface ISeatPlanInterface {
    data : object,
    isLoading : boolean,
    theater : {
        data : {},
        isLoading : boolean
    }
    seatIds : string,
    bookingInfo : object,
    reservedSeatIds : object,
    token : {
        data : string,
        isLoading: boolean
    }
    ,
    permReservedSeatIds : object
}

export interface IBookingInfoData {
    seatList : Array<String>,
    bookingInfoId : number
}