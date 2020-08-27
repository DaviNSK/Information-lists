import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 12px 0px 0px 75px;

  @media (max-width: 1024px) {
    padding: 12px 0px 0px 44px;
  }

  @media (max-width: 768px) {
    padding: 12px 0px 0px 5px;
    flex-direction: column;
  }
`;

export const Filter = styled.div`
  width: 25%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 40px;
  }
`;

export const Card = styled.div`
  width: 75%;
  height: 600px;
  overflow-y: auto;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 0px;
    width: 100%;
    height: 500px;
  }
`;
