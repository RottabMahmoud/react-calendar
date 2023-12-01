import localForage from "localforage";

export const initialState = {
  allEvents: [], // our state/ have only events, that will be shown in out UI
};

// Our reducer and all actions below.
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // To Fetch All Data
    case "ALL_EVENTS": //
      return { ...state, allEvents: action.allEvents };
    // TO Delete an Event.
    case "REMOVE_EVENT":
      var newState = state;
      newState.allEvents = newState.allEvents.filter(function (obj) {
        return obj.id !== action.payload;
      });
      // LocalForage to make the data persist in our UI Layer, even after refresh.
      localForage.setItem("AllEvents", newState.allEvents);
      return newState;
    // To Add an event:
    case "ADD_EVENT":
      var newState2 = state;
      newState2.allEvents.push(action.payload);
      localForage.setItem("AllEvents", newState2.allEvents);
      return newState2;
    // To update an event.
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
