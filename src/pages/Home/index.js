import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardFilter from '../../components/Informations/CardFilter';
import CardInfo from '../../components/Informations/CardInfo';

import { Container, Filter, Card } from './styles';

import Repository from './../../services/repository';
import * as InfosActions from '../../store/modules/filter/actions';
import * as ListActions from '../../store/modules/list/actions';

export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.filter);
  const list = useSelector((state) => state.list);

  const getFilter = async () => {
    const response = await api.getFilter();

    dispatch(InfosActions.setFilter(response.data));
  };

  const getList = async () => {
    const response = await api.getList();

    dispatch(ListActions.setList(response.data));
  };

  useEffect((data) => {
    getFilter(data);
    getList(data);
  }, []);

  const getFilterById = async (data) => {
    if (data.id === 0) return getList();

    const response = await api.getFilterById(data.id);

    dispatch(ListActions.setList(response.data));
  };

  return (
    <>
      <Container>
        {infos && (
          <Filter>
            <CardFilter
              getFilter={(filterItem) => getFilterById(filterItem)}
              infos={infos}
            />
          </Filter>
        )}
        <Card>
          <CardInfo infos={list} />
        </Card>
      </Container>
    </>
  );
}
