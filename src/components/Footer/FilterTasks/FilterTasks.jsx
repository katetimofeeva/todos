import React from "react";
import { FILTERS } from "./Constants.jsx";

import styled from "styled-components";

const FilterTasks = ({ filter, marker }) => {
  const getFilter = (e) => {
    filter(e.target.innerText.toLocaleLowerCase());
  };

  return (
    <>
      {FILTERS.map((btn) => (
        <Root>
          <Btn
            key={btn}
            onClick={getFilter}
            active={marker === btn.toLocaleLowerCase()}
          >
            {btn}
          </Btn>
        </Root>
      ))}
    </>
  );
};

const Root= styled.li`
  display: inline-block;
`;

export const Btn = styled.button`
  display: block;
  width: 40px;
  border: hidden;
  color: #83756f;
  margin: 2px;
  cursor: pointer;
  background-color: #eaeaea;
  ${({ active }) => active && "font-weight: bold;"}
  text-transform: capitalize;
  padding-right: 5px;
`;

export default FilterTasks;
