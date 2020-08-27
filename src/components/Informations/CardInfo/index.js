import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../assets/icons/table.svg';
import Check from '../../../assets/icons/check.svg';
import Play from '../../../assets/icons/play-circle.svg';
import Plane from '../../../assets/icons/paper-plane.svg';
import Pen from '../../../assets/icons/pen.svg';
import Bed from '../../../assets/icons/bed.svg';

import { Container, HeadInfo, Card } from './styles';

export default function CardInfo(props) {
  const listIcon = {
    0: { icon: Table, name: 'Todos' },
    1: { icon: Plane, name: 'Enviando' },
    2: { icon: Play, name: 'Ativadas' },
    3: { icon: Pen, name: 'Configurando' },
    4: { icon: Bed, name: 'Ociosa' },
    5: { icon: Check, name: 'Concluido' },
  };

  return (
    <Container>
      <HeadInfo>
        <li className="name">Nome</li>
        <li className="destiny">Destinatários</li>
        <li className="sucsess">Sucesso</li>
        <li className="status">Status</li>
      </HeadInfo>

      {props.infos &&
        props.infos.map((element) => (
          <Card key={element.id}>
            <div className="name">
              <p>{element.name}</p>
            </div>
            <div className="destiny">
              <p>{element.recipients}</p>
            </div>
            <div className="sucsess">
              <p>{element.success}</p>
            </div>
            <div className="status">
              <img src={listIcon[element.status].icon} alt="icon" />
              <p>{listIcon[element.status].name}</p>
            </div>
          </Card>
        ))}
    </Container>
  );
}

CardInfo.propTypes = {
  infos: PropTypes.array,
};
