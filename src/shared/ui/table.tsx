import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;

  thead tr {
    background-color: #faa473;
    color: white;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;
