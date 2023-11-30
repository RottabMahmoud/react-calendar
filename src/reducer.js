// import moment from "moment";
import localForage from "localforage";

export const initialState = {
  allEvents: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS":
      return { ...state, allEvents: action.allEvents };
    case "REMOVE_EVENT":
      var newState = state;
      newState.allEvents = newState.allEvents.filter(function (obj) {
        return obj.id !== action.payload;
      });
      localForage.setItem("AllEvents", newState.allEvents);
      return newState;
    case "ADD_EVENT":
      var newState2 = state;
      newState2.allEvents.push(action.payload);
      localForage.setItem("AllEvents", newState2.allEvents);
      return newState2;
    case "UPDATE_EVENT":
      var newState3 = state;
      newState3.allEvents[action.payload.id] = action.payload.obj;
      localForage.setItem("AllEvents", newState3.allEvents);
      return newState3;
    default:
      return state;
  }
};

export default reducer;
