export const setSeatIDs = (seatIDString) => {
    return{
        type:'SEAT_IDS',
        payload:seatIDString.seatIdString
    }
}

export const setSelectedMovie = (movieId) => {
    return{
        type : 'SELECTED_MOVIE_ID',
        payload:movieId
    }
}