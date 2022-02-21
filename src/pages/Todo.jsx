import React, { useState,  } from "react";

import { nanoid } from "nanoid";

import styled from "styled-components";

import Header from "../components/Header/Header.jsx";
import List from "../components/TasksList/List/List.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { getTodos,
  addTodo,
  deleteTask,
  completedTask,
  completedAllTasks,
  deleteAllTasks,
  editTask,
  } from '../components/Utils/Servise.jsx'

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [marker, setMarker] = useState("all");

  //

  // useEffect(() => {
  //   console.log("useEffect");

  // }, [marker]);

  const addTask = (value) => {
    setTodos([
      ...todos,
      { description: value, id: nanoid(10), completed: false },
    ]);
  };

  const completedTask = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setTodos(newTodos);
  };

  const clearCompletedAll = () => {
    setTodos(todos.filter((item) => !item.completed));
    if (marker === "completed" && todos.length) {
      setMarker("all");
    }
  };

  const deleteTask = (id) => {
    console.log(marker);
    setTodos(todos.filter((item) => item.id !== id));

    if (visibleTask().length === 1) {
      setMarker("all");
    }
  };

  const completedAllTasks = (done) => {
    setTodos(
      todos.map((item) => {
        return {
          ...item,
          completed: done,
        };
      })
    );
  };

  const filter = (filter) => {
    switch (filter) {
      case "completed":
        setMarker("completed");
        break;
      case "active":
        setMarker("active");
        break;
      default:
        setMarker("all");
        break;
    }
  };

  const editTask =(id, value)=>{
    console.log(value)
   setTodos(todos.map(item => {
     if(item.id===id){
       return{
         ...item,
         description: value
       }
     } return item
   }))
  }

  let isAllCompleted = false;

  todos.length === 0
    ? (isAllCompleted = false)
    : (isAllCompleted = todos.every((item) => item.completed));

  const visibleTask = () => {
    console.log(marker);
    if (marker === "completed") {
      return todos.filter((item) => item.completed);
    } else if (marker === "active") {
      return todos.filter((item) => !item.completed);
    } else {
      return todos;
    }
  };


  return (
    <Root>
      <MainSection>
        <Header
          addTask={addTask}
          completedAllTasks={completedAllTasks}
          isAllTasksCompleted={isAllCompleted}
          todosLength={todos.length}

        />
        <List
          todos={visibleTask()}
          completedTask={completedTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </MainSection>
      {todos.length === 0 ? (
        ""
      ) : (
        <Footer
          todos={todos}
          clearCompletedAll={clearCompletedAll}
          filter={filter}
          marker={marker}
        />
      )}
    </Root>
  );
};

const Root = styled.div`
  font-style: italic;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #eaeaea;
  color: #4d4d4d;
  width: 550px;
  margin: 0 auto;
`;

const MainSection = styled.section`
  width: 555px;
  background: rgba(255, 255, 255, 0.9);
  margin: 130px 0 40px 0;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 15%);

  &::before {
    content: "";
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 45px;
    /* height: 100vh; */
    height: 100%;
    z-index: 2;
  }
`;

export default Todo;
