import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Tooltip } from 'antd';
import { BsFillCircleFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

import { VscSearch } from 'react-icons/vsc';

import Logo from '../../assets/images/logotipo-branco.png';
import acme from '../../assets/images/acme-logo.png';
import Chart from '../../assets/icons/chart-pie.svg';
import Rocket from '../../assets/icons/rocket.svg';
import User from '../../assets/icons/user-friends.svg';
import Cloud from '../../assets/icons/ccm-cloud.svg';
import External from '../../assets/icons/external.svg';
import Gem from '../../assets/icons/gem.svg';
import Tools from '../../assets/icons/tools.svg';
import Exchange from '../../assets/icons/exchange-alt.svg';
import SignOut from '../../assets/icons/sign-out-alt.svg';

import {
  Container,
  SideBar,
  MenuList,
  ModuleBorder,
  ConfigList,
} from './styles';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuList] = useState([
    { name: 'Análises', icon: Chart },
    { name: 'Jornadas', icon: Rocket },
    { name: 'Clientes', icon: User },
    { name: 'CCM Cloud', icon: Cloud },
    { name: 'Versāo 01', icon: External },
  ]);
  const [configList] = useState([
    { name: 'Administraçāo', icon: Gem },
    { name: 'Help Desk', icon: Tools },
    { name: 'Trocar Conta', icon: Exchange },
    { name: 'Sair', icon: SignOut },
  ]);

  const expandedMenu = () => {
    const containerMain = document.getElementById('main-layout');
    let valueOpen = '251px';
    let valueClose = '70px';

    if (window.innerWidth <= 768) {
      valueOpen = '35%';
      valueClose = '0px';
    }

    containerMain.style.marginLeft = `${!showMenu ? valueOpen : valueClose}`;

    setShowMenu(!showMenu);
  };

  function sideBar() {
    return (
      <>
        <ModuleBorder expanded={showMenu} />
        <SideBar expanded={showMenu}>
          <NavLink className="logo-name" to="/">
            <img
              onClick={expandedMenu}
              className="logo"
              src={Logo}
              alt="logo"
            />
          </NavLink>

          {window.innerWidth > 768 || showMenu ? (
            <MenuList expanded={showMenu}>
              {menuList.map((item) => (
                <div key={item.name} className="item">
                  <Tooltip placement="right" title={item.name}>
                    {showMenu ? item.name : <img src={item.icon} alt="icon" />}
                  </Tooltip>
                </div>
              ))}
              <div className="divider" />
            </MenuList>
          ) : (
            ''
          )}

          <ConfigList expanded={showMenu}>
            {configList.map((item) => (
              <div key={item.name} className="item" to={item.router}>
                <Tooltip placement="right" title={item.name}>
                  {showMenu ? item.name : <img src={item.icon} alt="icon" />}
                </Tooltip>
              </div>
            ))}
          </ConfigList>

          <ModuleBorder expanded={showMenu} />
        </SideBar>
      </>
    );
  }

  return (
    <>
      {sideBar()}
      <Container expanded={showMenu}>
        <div className="mobileWrapper">
          <img src={Logo} alt="logo" />
          <AiOutlineMenu />
        </div>

        <div className="rowMob">
          <div className="content-img">
            <div className="circle">
              <Tooltip placement="right" title="Davi Cardoso">
                <h1>D</h1>
                <BsFillCircleFill />
              </Tooltip>
            </div>

            <div className="acme">
              <img src={acme} alt="acme" />
            </div>
          </div>

          <form>
            <div>
              <VscSearch />
              <input type="text" placeholder="Buscar" />
            </div>
            <button>+ Nova Jornada</button>
            <button className="btMobile">+</button>
          </form>
        </div>
      </Container>
    </>
  );
}
