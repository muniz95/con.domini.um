import styled from 'styled-components';
import global from '../../global.style';

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

export const AdCardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const AdCard = styled.div`
  height: 150px;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

export const AdCardBody = styled.div`
  width: 100%;
  background-color: ${global.primaryColor};
  margin: 5px;
  border-radius: 5px;
`;

export const AdCardTitle = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export default {
  Tab,
  TabBar,
  AdCardContainer,
  AdCard,
  AdCardBody,
  AdCardTitle,
};
