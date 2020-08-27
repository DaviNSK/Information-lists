import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 350px;
  flex-direction: column;
  padding: 0px 10px 10px 0px;
  overflow: hidden;
  position: relative;
  padding-top: 22px;

  h1 {
    color: #3e4157;
    font-size: 20px;
    font-weight: bold;
    margin-left: 2px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin: auto;
    }
  }
`;

export const ListFilter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  line-height: 9px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  :hover {
    p {
      color: #117eff;
    }
  }

  p {
    color: ${(props) => (props.active ? '#117EFF' : '#3e4157')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    margin-top: 14px;
    width: 43%;
    word-break: break-all;

    @media (max-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 73%;
    }
  }

  img {
    width: 20px;
    height: 20px;
    color: #d190dd;
    margin-right: 10px;
  }

  div {
    width: 20%;
    display: flex;
    svg {
      color: ${(props) => (props.active ? '#117EFF' : '#e4e6f1')};
      font-size: 23px;
      position: relative;
    }

    span {
      color: ${(props) => (props.active ? '#FFF' : '#9196AB')};
      position: absolute;
      z-index: 2;
      font-weight: bolder;
      font-size: 12px;
      margin-left: 8px;
      margin-top: 8px;
    }
  }
`;
