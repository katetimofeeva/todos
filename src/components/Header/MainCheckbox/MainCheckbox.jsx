import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { completedAllTaskActionCreator } from "../../../redux/actions.jsx";
import { receiveTodos } from "../../../redux/selectors.jsx";

import {completedAllItem, getTodos} from '../../../Utils/Servise'

const MainCheckbox = () => {
  const todosLength = useSelector(receiveTodos).length;
  const todos = useSelector(receiveTodos);
  const dispatch = useDispatch();

  const handleToggleAllTasks = (e) => {
    console.log('done')
    // completedAllTasks(e.target.checked);
    completedAllItem(e.target.checked)
    // dispatch({ type: COMPLETED_ALL_TASKS, completed: e.target.checked });
    getTodos().then((res) => {
      dispatch(completedAllTaskActionCreator(res.data));
    });
  };

  let isAllCompleted = false;

  todosLength === 0
    ? (isAllCompleted = false)
    : (isAllCompleted = todos.every((item) => item.completed));

  return (
    <>
      <StyledInput
        type="checkbox"
        id="input_header_check"
        checked={isAllCompleted}
        // onClick={handleToggleAllTasks}
        onChange={handleToggleAllTasks}
      />
      <Label htmlFor="input_header_check" visible={!todosLength}>
        <Span checked={isAllCompleted}>»</Span>
      </Label>
    </>
  );
};

const StyledInput = styled.input`
  font-size: 2em;
  outline: none;
  border: none;
  display: none;
`;

const Label = styled.label`
  display: block;
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  visibility: ${({ visible }) => (visible ? "hidden" : "visible")};
`;

const Span = styled.span`
  font-size: 28px;
  color: ${(props) => (props.checked ? " #737373" : "#d9d9d9")};
  padding: 0 17px;
  transform: rotate(90deg);
  /* overflow: ${(checked) => (checked ? "visible" : "hidden")}; */
`;

export default MainCheckbox;
