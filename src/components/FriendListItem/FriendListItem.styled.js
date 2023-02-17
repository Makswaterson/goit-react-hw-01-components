import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
`;
export const FriendSpan = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
