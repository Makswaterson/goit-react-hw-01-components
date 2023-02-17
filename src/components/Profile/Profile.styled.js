import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: rgba(46, 105, 182, 0.31);
  width: 500px;
  margin-right: auto;
  margin-left: auto;
`;
export const Description = styled.div`
  background-color: rgba(24, 38, 44, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  border-radius: 50%;
  object-fit: contain;
  margin-top: 30px;

  width: 300px;
`;
export const NameUser = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const UserTag = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgba(24, 38, 44, 0.92);
`;
export const UserLocation = styled.p`
  margin-top: 10px;
  padding-bottom: 40px;
  color: rgba(24, 38, 44, 0.92);
`;
export const UserStats = styled.ul`
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;

  gap: 25px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
