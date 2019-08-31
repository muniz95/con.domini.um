import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Table = styled.table`
  width: 90%;
  thead {
    tr {
      th {
        text-align: left;
        border-style: none;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: left;
        border-style: none;
      }
    }
  }
`;

export default {
  Center,
  Table,
};
