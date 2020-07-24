import styled from "styled-components";

export const TabBar = styled.ul`
  ::before {
    display: table;
  }
`;

export const Tab = styled.li`
  margin-top: -1px;
  border-style: solid;
  list-style: none;
  border: none;
  display: list-item;
  a {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
`;

export default {
  Tab,
  TabBar,
};
