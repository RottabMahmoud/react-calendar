export const initialState = {
  home: "HELLO REDUX",
  about: "VERSION 1.0.0",
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
