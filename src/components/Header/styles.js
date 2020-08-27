import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  top: 0;
  width: calc(100% - (${(props) => (props.expanded ? '251px' : '70px')}));
  align-items: center;
  padding: 0px 20px;
  height: 90px;
  background: #fafbff;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    background: #1a1731;
    padding-top: 15px;
    height: 120px;
    z-index: 20;
  }

  .mobileWrapper {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    svg {
      font-size: 26px;
      color: #fff;
    }

    img {
      height: 28px;
      width: 45px;
    }
  }

  .rowMob {
    display: flex;
    width: 100%;
    z-index: 20;
  }

  .content-img {
    display: flex;
    width: ${(props) => (props.expanded ? '28%' : '23.7%')};
    align-items: center;
    justify-content: center;

  @media (max-width: 1024px) {
    width: ${(props) => (props.expanded ? '24%' : '19.4%')};
  }

    @media (max-width: 768px) {
      justify-content: end;
      width: 40%;
      margin-top: 34px;
    }
  }

  .circle {
    margin-right: 22px;
    display: flex;

    @media (max-width: 768px) {
      margin-right: 17px;
      }

    svg {
      font-size: 28px;
      position: relative;
      color: #117eff;
    }

    h1 {
      color: #ffffff;
      font-size: 18px;
      margin-left: 7.7px;
      margin-top: 4px;
      font-weight: bold;
      position: absolute;
      z-index: 2;

      @media (max-width: 768px) {
        margin-left: 8px;
        margin-top: 4.5px;
      }
    }
  }

  .acme {
    border-radius: 5px;
    width: 93px;
    height: 33px;
    border: 1px solid #ebeef6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;

    @media (max-width: 768px) {
      width: 80px;
      height: 28px;
    }

    img {
      width: 63px;
      height: 21px;

      @media (max-width: 768px) {
        width: 50px;
        height: 17px;
      }
    }
  }

  form {
    width: ${(props) => (props.expanded ? '73%' : '76%')};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        width: 60%;
        margin-top: 15px;
      }

    > div {
      display: flex;
      svg {
        position: absolute;
        font-size: 13px;
        color: #117eff;
        margin-top: 12px;
        margin-left: 11px;

        @media (max-width: 768px) {
          margin-top: 30px;
        }
      }
    }

    input {
      border: 1px solid #cccfde;
      border-radius: 5px;
      background: transparent;
      width: 296px;
      height: 35px;
      padding-left: 30px;
      outline: none;
      margin-right: 15px;

      ::placeholder {
        color: #9196ab;
        font-size: 13px;
      }

      @media (max-width: 768px) {
        width: 120px;
        height: 28px;
        margin-top: 20px;
      }
    }

    button {
      color: #fff;
      height: 35px;
      width: 150px;
      background: #117eff;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
      outline: none;
      margin-right: 40px;

      @media (max-width: 768px) {
        display: none;
        margin-top: 20px;
        height: 30px;
        width: 30px;
      }
    }

    .btMobile {
      display: none;
      color: #fff;
      height: 30px;
      width: 30px;
      background: #117eff;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
      outline: none;

      @media (max-width: 768px) {
        margin-top: 20px;
        display: block;
      }
    }
  }
`;

export const ModuleBorder = styled.div`
  height: 3px;
  width: ${(props) => (props.expanded ? '251px' : '70px')};
  background: linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
  transition: all 0.3s;
`;

export const SideBar = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  width: ${(props) => (props.expanded ? '251px' : '70px')};
  height: 99.6%;
  background-color: #1a1731;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(100% - (${(props) => (props.expanded ? '65%' : '100%')}));
    display: none;
  }

  .logo {
    width: ${(props) => (props.expanded ? '80px' : '42px')};
    height: ${(props) => (props.expanded ? '50px' : '25px')};
    margin-top: 5px;
  }

  .logo-name {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    position: absolute;
    right: 0;
    left: 0;
    margin: 24px auto;
    text-align: center;

    &:hover {
      color: #61dafb;
    }
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;

  .item {
    display: flex;
    margin-bottom: 7px;
    align-items: center;
    color: #e4e6f1;
    font-weight: bold;
    font-size: ${(props) => (props.expanded ? '15px' : '0px')};
    padding-left: ${(props) => (props.expanded ? '18px' : '0px')};
    width: 100%;
    height: 46px;
    text-decoration: none;

    &:hover {
      color: #117eff;
    }
  }

  img {
    display: flex;
    margin-bottom: 7px;
    width: 100%;
    height: 22px;
  }

  .divider {
    margin-left: ${(props) => (props.expanded ? '20px' : '24px')};
    width: ${(props) => (props.expanded ? '80%' : '30%')};
    position: absolute;
    margin-top: 13rem;
    height: 1px;
    background: linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
  }
`;

export const ConfigList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;

  .item {
    display: flex;
    align-items: center;
    color: #e4e6f1;
    font-weight: bold;
    font-size: ${(props) => (props.expanded ? '15px' : '0px')};
    padding-left: ${(props) => (props.expanded ? '18px' : '0px')};
    width: 100%;
    height: 43px;
    text-decoration: none;

    &:hover {
      color: #117eff;
    }
  }

  img {
    display: flex;
    margin-bottom: 7px;
    width: 100%;
    height: 22px;
    text-decoration: none;

    &:hover {
      color: #117eff;
    }
  }
`;
