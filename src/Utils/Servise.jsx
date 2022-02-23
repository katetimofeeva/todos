import axios from "axios";

// const doFetch = async (method, url, data) => {
//   try {
//     const res = await fetch(url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: data,
//     });
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}, status ${res.status}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

const loginUser = async(value) => {
  try {
  const res =  await axios.post(
      ` http://${process.env.REACT_APP_URL}/login`,
      JSON.stringify( value)
    );
    if (!res.ok) {
      throw new Error(` Status ${res.status}`);
    }
  } catch (error) {
    console.error(error);
  }
 
}
const addTodo = async (value) => {
  try {
    await axios.post(
      ` http://${process.env.REACT_APP_URL}`,
      JSON.stringify({ description: value, completed: false })
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id) => {
  try {
    await axios.post(` http://${process.env.REACT_APP_URL}/delete`, id);
  } catch (error) {
    console.error(error);
  }
};

const completedItem = async (id, checked) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/checked`,
      JSON.stringify({ id, checked: !checked })
    );
  } catch (error) {
    console.error(error);
  }
};

const completedAllItem = async (checked) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/completed`,
      JSON.stringify({ checked: checked })
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteAllTasks = async () => {
  try {
    await axios.post(`http://${process.env.REACT_APP_URL}/deleteAllCompleted`);
  } catch (error) {
    console.error(error);
  }
};

const editItem = async (value, id) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/edit`,
      JSON.stringify({ description: value, id })
    );
  } catch (error) {
    console.error(error);
  }
};

// ${process.env.REACT_APP_URL}
const getTodos = async () => {
  try {
    const result = await axios.get(`http://${process.env.REACT_APP_URL}`);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export {
  getTodos,
  addTodo,
  deleteItem,
  completedItem,
  completedAllItem,
  deleteAllTasks,
  editItem,
  loginUser 
  // doFetch,
};
