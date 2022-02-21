import React from "react";

import styled from "styled-components";

const MainCheckbox = ({ completedAllTasks, isAllTasksCompleted, todosLength }) => {
  const handleToggleAllTasks = (e) => {
    completedAllTasks(e.target.checked);
  };
  console.log(todosLength)

  return (
    <>
      <StyledInput
        type="checkbox"
        id="input_header_check"
        checked={isAllTasksCompleted}
        onClick={handleToggleAllTasks}
        onChange={handleToggleAllTasks}
      />
      <Label htmlFor="input_header_check" visible={!todosLength}>
        <Span checked={isAllTasksCompleted} >»</Span>
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
  visibility: ${({visible }) => visible? 'hidden': 'visible'};
`;

const Span = styled.span`
  font-size: 28px;
  color: ${(props) => (props.checked ? " #737373" : "#d9d9d9")};
  padding: 0 17px;
  transform: rotate(90deg);
  /* overflow: ${(checked) => (checked ? "visible" : "hidden")}; */
  
`;

export default MainCheckbox;
