const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const initialSeatIdString = {
  seatString: ''
}

const initialSelectedMovieId = {
  movieId: ''
}

export const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

export const updateSeatIDStringReducer = (state = initialSeatIdString, action) => {
  switch (action.type) {
    case 'SEAT_IDS':
      console.log("skyline");
      return {
        ...state,
        seatString: action.payload
      }
    default: {
      return state
    }
  }
}

export const updateSelectedMovieIdReducer = (state = initialSelectedMovieId, action) => {
  switch(action.type){
    case 'SELECTED_MOVIE_ID':
      return {
        ...state,
        movieId:action.payload
      }
    default: {
      return state
    }
  }
}