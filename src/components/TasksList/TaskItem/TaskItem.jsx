import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  completedItem,
  getTodos,
  editItem,
  deleteItem,
} from "../../../Utils/Servise";

import {
  deleteTaskActionCreator,
  toggleTaskActionCreator,
  editTaskActionCreator,
  setMarkerActionCreator
} from "../../../redux/actions.jsx";

import { receiveTodos, receiveMarker } from "../../../redux/selectors.jsx";

const TaskItem = ({ item }) => {
  const [activeEdit, setActiveEdit] = useState(true);
  const [value, setValue] = useState(item.description);

  const dispatch = useDispatch();
  const todos = useSelector(receiveTodos);
  const marker = useSelector(receiveMarker);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const completedTask = () => {
    completedItem(item._id, item.completed);
    getTodos().then((res) => {
      dispatch(toggleTaskActionCreator(res.data ) );
    });
  };
  const handleDeleteTask = () => {
    deleteItem(item._id);
    getTodos().then((res) => {
      dispatch(deleteTaskActionCreator(res.data));
    });

    if (marker === "completed" && todos.length) {
      dispatch(setMarkerActionCreator("all") );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.length) {
      console.log("ok");
      editItem(value, item._id);

      setActiveEdit(true);
    } else if (e.key === "Enter" && !value.length) {
      console.log("no");
      deleteItem(item._id);

      setActiveEdit(true);
    }
    getTodos().then((res) => {
      dispatch(editTaskActionCreator( res.data ));
    });
  };

  const handleBlur = () => {
    if (value.length) {
      console.log("blur");
      editItem(value, item._id);
      setActiveEdit(true);
    } else {
      deleteItem(item._id);
    }

    setActiveEdit(true);
    getTodos().then((res) => {
      dispatch(editTaskActionCreator( res.data ));
    });
  };

  const description = item.description.slice(0, 30);

  return (
    <StyledLi>
      <Wrapper>
        <div>
          <StyledInput
            type="checkbox"
            checked={item.completed}
            id={item.id}
            onChange={completedTask}
            //что надо писать в onChange
          />

          <StyleLabel
            activeEdit={activeEdit}
            completed={item.completed}
            htmlFor={item._id}
            onClick={() => completedTask(item._id, item.completed)}
          ></StyleLabel>
        </div>
        {activeEdit ? (
          <ItemTask
            onDoubleClick={() => setActiveEdit(false)}
            completed={item.completed}
          >
            {description}
          </ItemTask>
        ) : (
          <Value
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        )}
        {activeEdit && (
          <div>
            <DeleteButton className="delete" onClick={handleDeleteTask}>
              ✖
            </DeleteButton>
          </div>
        )}
      </Wrapper>
    </StyledLi>
  );
};

const Value = styled.input`
  display: block;
  width: 490px;
  position: absolute;
  right: 5px;
  bottom: 2px;
  height: 60px;
  font-size: 24px;
  color: #4d4d4d;
  padding: 18px 15px;
  /* border: 1px solid #999; */
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
`;

const ItemTask = styled.div`
  position: relative;
  width: 500px;
  background-color: #fff;
  margin-left: 20px;
  padding: 18px 15px;
  font-size: 24px;
  color: ${({ completed }) =>
    completed ? "rgb(169, 169, 169)" : "rgb(77, 77, 77)"};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

const StyledLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: none;

  position: relative;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;

  &:hover .delete {
    display: block;
  }
`;

const Wrapper = styled.div`
  width: 510px;
  height: 65px;
  display: flex;
  background-color: #fff;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  background-color: #fff;
  white-space: pre;
  word-break: break-word;
  display: block;
  line-height: 1.2;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;

  &::before {
    content: "✔";
    cursor: pointer;
    line-height: 43px;
    font-size: 20px;
    display: ${(props) => (props.activeEdit ? "inline-block" : "none")};
    padding-top: 10px;
    padding-left: 15px;
    color: ${({ completed }) => (completed ? "#85ada7" : "#d9d9d9")};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    text-shadow: ${({ completed }) => (completed ? "0 1px 0 #669991" : "")};
    bottom: ${(completed) => (completed ? "1px" : "")};
  }
`;

const DeleteButton = styled.button`
  display: none;
  content: "✖";
  border: none;
  position: absolute;
  right: 10px;
  top: 12px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 22px;
  background-color: #fff;
  color: #a88a8a;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 1px #000, 0 0 10px rgb(199 107 107 / 80%);
    transform: scale(1.3);
  }
`;
export default TaskItem;
