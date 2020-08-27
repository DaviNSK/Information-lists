import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const HeadInfo = styled.ul`
  display: flex;
  width: 80%;
  padding-left: 5px;
  list-style: none;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  li {
    color: #9196ab;
  }

  .name {
    width: 35%;

    @media (max-width: 768px) {
      width: 29%;
    }
  }

  .destiny {
    width: 25%;

    @media (max-width: 768px) {
      width: 28%;
    }
  }

  .sucsess {
    width: 20%;

    @media (max-width: 768px) {
      width: 21%;
    }
  }
`;

export const Card = styled.div`
  width: 80%;
  background: #fff;
  height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding-top: 15px;
  padding-left: 5px;
  display: flex;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }


    p {
      color: #3e4157;
    }
  }

  .name {
    width: 35%;
    font-weight: bold;

    @media (max-width: 768px) {
    width: 29%;
    }
  }

  .destiny {
    width: 13%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
    width: 21%;
    }
  }

  .sucsess {
    width: 32%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
    width: 18%;
    justify-content: flex-end;
    }
  }

  .status {
    display: flex;

    @media (max-width: 768px) {
    width: 0%;
    margin-left: 10px;
    }
    
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;

      @media (max-width: 768px) {
       margin-right: 0px;
     }
    }

    p {
      margin-top: 2px;
    }
  }
`;
