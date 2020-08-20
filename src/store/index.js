import { createStore } from "redux";

const INITIAL_STATE = {
  downloadsList: [],
};

function downloads(state = INITIAL_STATE, action) {
  console.log("object", action.downloadData);
  switch (action.type) {
    case "ADD_DOWNLOAD":
      return {
        ...state,
        downloadsList: [...state.downloadsList, { ...action.downloadData }],
      };
    default:
      return state;
  }
}

const store = createStore(downloads);

export default store;
