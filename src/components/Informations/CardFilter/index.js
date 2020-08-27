import React, { useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

import Table from '../../../assets/icons/table.svg';
import Check from '../../../assets/icons/check.svg';
import Play from '../../../assets/icons/play-circle.svg';
import Plane from '../../../assets/icons/paper-plane.svg';
import Pen from '../../../assets/icons/pen.svg';
import Bed from '../../../assets/icons/bed.svg';

import { Container, ListFilter } from './styles';

export default function CardFilter(props) {
  const list = {
    0: Table,
    1: Plane,
    2: Play,
    3: Pen,
    4: Bed,
    5: Check,
  };
  const [activeItem, setActiveItem] = useState(0);

  const chooseItem = (element) => {
    setActiveItem(props.infos[element].id);
    props.getFilter(props.infos[element]);
  };

  return (
    <Container>
      <h1>Jornadas</h1>

      {props.infos &&
        Object.keys(props.infos).map((element) => (
          <ListFilter
            active={activeItem === props.infos[element].id}
            onClick={() => chooseItem(element)}
            key={props.infos[element].id}
          >
            <img src={list[props.infos[element].id]} alt="icon" />
            <p>{props.infos[element].name}</p>

            <div>
              <BsFillCircleFill />
              <span>{props.infos[element].quantity}</span>
            </div>
          </ListFilter>
        ))}
    </Container>
  );
}

CardFilter.propTypes = {
  infos: PropTypes.array,
  getFilter: PropTypes.func,
};
