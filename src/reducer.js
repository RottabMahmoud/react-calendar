export const initialState = {
  hotels: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
    //     return {
    //       ...state,
    //       hotels: state.hotels.filter((x) => x.name === action.value),
    //     };
    //   case "RESET":
    //     return {
    //       ...state,
    //       hotels: state.searchedHotels,
    //     };
    //   case "DELETE_HOTEL":
    //     const index = state.hotels.findIndex((hotel) => hotel.id === action.id);
    //     let newHotels = [...state.hotels];
    //     if (index >= 0) {
    //       newHotels.splice(index, 1);
    //     } else {
    //       console.warn("Can't remove Hotel, as It's not in the List");
    //     }
    //     return {
    //       ...state,
    //       hotels: newHotels,
    //     };
    default:
      return state;
  }
};

export default reducer;
