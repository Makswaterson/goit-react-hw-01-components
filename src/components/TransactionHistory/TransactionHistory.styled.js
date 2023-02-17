import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 700px;
`;
export const TransactionHistoryLine = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px groove black;
  background-color: rgba(46, 105, 182, 0.31);
  th {
    width: 200px;
  }
  td {
    width: 200px;
    text-align: center;
  }
`;
