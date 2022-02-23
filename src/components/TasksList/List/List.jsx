import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import TaskItem from "../TaskItem/TaskItem.jsx";
import {receiveTodos, receiveMarker} from '../../../redux/selectors'

function List({  completedTask, deleteTask, editTask }) {

  const todos = useSelector(receiveTodos)
  const marker = useSelector(receiveMarker);

  const visibleTask = () => {
    if (marker === "completed") {
      return todos.filter((item) => item.completed);
    } else if (marker === "active") {
      return todos.filter((item) => !item.completed);
    } else {
      return todos;
    }
  };
  const showTask = visibleTask();

  return (
    <Root>
      <StyledUl>
        {showTask.map((item) => { 
          return <TaskItem item={item} key={item._id} />;
        })}
      </StyledUl>
    </Root>
  );
}

const Root = styled.section`
  width: 555px;
  max-height: 330px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(236, 223, 223, 0.5);
    border-radius: 60px;
  }
  /* ползунок */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(236, 223, 223, 1);
    border-radius: 60px;
  }
  /* стрелки */
  ::-webkit-scrollbar-button:vertical:start:decrement,
  ::-webkit-scrollbar-button:vertical:end:increment {
    background-color: rgba(223, 200, 200, 0.8);
    border-radius: 60px;
  }
`;
const StyledUl = styled.ul`
  position: relative;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;
  margin: 0;
  padding: 0;
`;
export default List;
