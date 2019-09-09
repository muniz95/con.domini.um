import styled from "styled-components";

export const TabBar = styled.ul`
  ::before {
    display: table;
  }
`;

export const Tab = styled.li`
  margin-top: -1px;
  border-style: solid;
`;

export default {
  Tab,
  TabBar,
};
