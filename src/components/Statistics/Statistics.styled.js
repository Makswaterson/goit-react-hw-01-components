import styled from 'styled-components';

export const SectionStatistics = styled.section`
  display: flex;
  width: 500px;
  background-color: rgba(46, 105, 182, 0.31);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px groove rgba(46, 105, 182, 0.31);
`;
export const ListStatistics = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 14px;
  }
`;
export const TitleStatistics = styled.h2`
  padding: 15px 25px;
`;
