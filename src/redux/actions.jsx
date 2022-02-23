export const addTaskActionCreator = (data) => {
  return {
    type: "ADD_TASK",
    payload: { todos: data },
  };
};

export const deleteTaskActionCreator = (data) => {
  return {
    type: "DELETE_TASK",
    payload: { todos: data },
  };
};

export const toggleTaskActionCreator = (data) => {
    return {
      type: "TOGGLE_COMPLETE_TASK",
      payload: { todos: data },
    };
  };

  export const editTaskActionCreator = (data) => {
    return {
      type: "EDIT_TASK",
      payload: { todos: data },
    };
  };

  export const completedAllTaskActionCreator = (data) => {
    return {
      type: "COMPLETED_ALL_TASKS",
      payload: { todos: data },
    };
  };

  export const deleteAllTaskActionCreator = (data) => {
    return {
      type: "DELETE_ALL_TASKS",
      payload: { todos: data },
    };
  };

  export const setMarkerActionCreator = (marker) => {
    return {
      type: "SET_MARKER",
      payload: { marker: marker },
    };
  };
// export const DELETE_TASK = "DELETE_TASK";
// export const TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK";
// export const EDIT_TASK = "EDIT_TASK";
// export const COMPLETED_ALL_TASKS = "COMPLETED_ALL_TASKS";

// export const DELETE_ALL_TASKS = "DELETE_ALL_TASKS";

// export const SET_MARKER = "SET_MARKER";

