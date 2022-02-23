import * as actions from "../redux/actions.jsx";

const initialState = {
  todos: [],
  marker: "all",
};

console.log(initialState);
function reduser(
  state = initialState,
  action
  
  // { type, id, description, completed, marker, attribute }
) {
  switch (action.type) {
    case 'ADD_TASK':
      console.log(action)
      return {
        ...state,
        todos: action.payload.todos,
        // ...state.todos,
        // { id: id, description: description, completed: false },
      };

    case 'DELETE_TASK':
      console.log("delete");
      console.log(action.payload.todos);
      return {
        // ...state,
        todos: action.payload.todos,
        // state.todos.filter((item) => item.id !== action.id),
      }; //[]

    case  'TOGGLE_COMPLETE_TASK':
      console.log("TOGGLE_COMPLETE_TASK");
      return {
        ...state,
        todos: action.payload.todos,
        // todos: state.todos.map((item) => {
        //   if (action.payload.id === item.id) {
        //     return {
        //       ...item,
        //       completed: !item.completed,
        //     };
        //   }
        //   return item;
        // }),
      };

    case 'EDIT_TASK':
      return {
        ...state,
        todos: action.payload.todos,
        // todos: state.todos.map((item) => {
        //   if (id === item.id) {
        //     return {
        //       ...item,
        //       description: description,
        //     };
        //   }
        //   return item;
        // }),
      };

    case 'COMPLETED_ALL_TASKS':
      console.log("COMPLETED_ALL_TASKS");
      return {
        ...state,
        todos: action.payload.todos,
        // todos: state.todos.map((item) => {
        //   return {
        //     ...item,
        //     completed: completed,
        //   };
        // }),
      };

    case  'SET_MARKER':
      console.log("SET_MARKER");
         return {
        ...state,
        marker: action.payload.marker,
      };

    case  'DELETE_ALL_TASKS':
      console.log(" DELETE_ALL_TASKS");
      return {
        ...state,
        todos: action.payload.todos,
        marker: "all",
      };

    default:
      return state;
  }
}

export default reduser;
