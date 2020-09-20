import React, { createContext, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { findItemIndexById } from "./utils/findItemIndexById";
import { moveItem } from "./moveItem";

const AppStateContext = createContext({});

const appData = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      state.lists.push({
        id: state.lists.length,
        text: action.payload,
        tasks: [],
      });
      return {
        ...state,
      };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.columnId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: uuidv4(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    case "SET_DRAGGED_ITEM": {
      return { ...state, draggedItem: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
