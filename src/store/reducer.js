import localForage from "localforage";

export const initialState = {
  allEvents: [], // our state/ have only events, that will be shown in out UI
  about: "React Calendar V1.0.0", // About Page statement
};

// Our reducer and all actions below.
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // To Set the current state, /Fetch All Data
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
      const updatedEvents = [...state.allEvents]; // Shallow copy of the events array
      updatedEvents[action.payload.id] = action.payload.obj; // Update the specific event
      localForage.setItem("AllEvents", updatedEvents); // Set Local Forage
      return { ...state, allEvents: updatedEvents }; // Return a new state with updated events

    default:
      return state;
  }
};

export default reducer;
