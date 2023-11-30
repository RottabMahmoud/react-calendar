export const initialState = {
  home: "HELLO REDUX",
  about: "React Calendar",
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(state.counter, "ADDING");
      return {
        ...state,
        counter: state.counter+1,
      };
    case "DECREMENT":
      console.log(state.counter, "DECREMENTING");
      return {
        ...state,
        counter: state.counter-1,
      };
    default:
      return state;
  }
};

export default reducer;
