const initialState = { mood: "happy" };

const moodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HAPPY":
      return { mood: "happy" };
    case "SAD":
      return { mood: "sad" };
    case "ANGRY":
      return { mood: "angry" };
    case "CONFUSED":
      return { mood: "confused" };
    default:
      return state;
  }
};

const store = Redux.createStore(moodReducer);
