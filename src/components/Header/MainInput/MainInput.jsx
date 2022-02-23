import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import MainCheckbox from "../MainCheckbox/MainCheckbox.jsx";
import { addTodo, getTodos } from "../../../Utils/Servise";

import { addTaskActionCreator } from "../../../redux/actions.jsx";

const MainInput = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    let value = e.target.value;
    if (e.keyCode === 13 && value.trim().length !== 0) {
      // dispatch({ type: ADD_TASK, description: value, });

      addTodo(value);
      getTodos().then((res) => {
        dispatch(addTaskActionCreator(res.data));
      });

      setValue("");
    }
  };

  return (
    <Root>
      <MainCheckbox />
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Whats need to be done?"
        autoComplete="off"
        autoFocus
        // ref={this.myRef}
      />
    </Root>
  );
};

const Root = styled.div`
  width: 540px;
  height: 65px;
  display: flex;
  background-color: #fff;
`;

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  padding: 15px;
  outline: none;
`;

export default MainInput;
