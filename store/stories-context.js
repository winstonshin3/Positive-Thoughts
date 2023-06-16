import { createContext, useReducer } from "react";
import { STORIES } from "../data/dummy-stories";

export const StoriesContext = createContext({
  stories: [],
  addStory: ({ title, description, date }) => {},
  deleteStory: (id) => {},
  updateStory: (id, { title, description, date }) => {},
});

function storiesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableStoryIndex = state.findIndex(
        (story) => story.id === action.payload.id
      );
      const updatableStory = state[updatableStoryIndex];
      const updatedItem = { ...updatableStory, ...action.payload.data };
      const updatedStories = [...state];
      updatedStories[updatableStoryIndex] = updatedItem;
      return updatedStories;
    case "DELETE":
      return state.filter((story) => story.id !== action.payload);
    default:
      return state;
  }
}

function StoriesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(storiesReducer, STORIES);

  function addStory(storyData) {
    dispatch({ type: "ADD", payload: storyData });
  }

  function deleteStory(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateStory(id, storyData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: storyData } });
  }

  const value = {
    stories: expensesState,
    addStory: addStory,
    deleteStory: deleteStory,
    updateStory: updateStory,
  };

  return (
    <StoriesContext.Provider value={value}>{children}</StoriesContext.Provider>
  );
}

export default StoriesContextProvider;
