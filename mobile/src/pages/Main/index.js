import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import { Context } from '../../contexts/HeaderContext';

import {
  Container,
  Title,
  Description,
  IncidentList,
  Incident,
  Property,
  Value,
  Button,
  ButtonText,
} from './styles';

export default function Main() {
  const { navigate } = useNavigation();
  const { incidentsCountChange, incidentsCount } = useContext(Context);
  const [incidents, setIncidents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [empty, setEmpty] = useState(true);

  async function loadIncidents(p) {
    try {
      if (empty) {
        setLoading(true);
      }

      const { data, headers } = await api.get('/incidents', {
        params: {
          page: p,
        },
      });

      const formattedData = data.map((item) => {
        return {
          ...item,
          id: String(item.id),
          ong: { ...item.ong, name: item.ong.name.toUpperCase() },
          value: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(item.value),
        };
      });

      if (p === 1) {
        setIncidents(formattedData);
        setPage(p);
        incidentsCountChange(headers['x-total-count']);
        return setEmpty(false);
      }

      setPage(p);
      return setIncidents([...incidents, ...formattedData]);
    } catch (err) {
      return Alert.alert(
        'Oops 😕!',
        'Sentimos muito, algo deu errado.',
        [
          {
            text: 'Vamos tentar novamente!',
            onPress: () => loadIncidents(1),
          },
        ],
        {
          cancelable: false,
        }
      );
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  }

  useEffect(() => {
    loadIncidents(page);
  }, []);

  function loadMore() {
    if (loading || refresh) {
      return;
    }

    if (incidentsCount > 0 && incidents.length === incidentsCount) {
      return;
    }

    setLoading(true);

    const pageNumber = page + 1;

    loadIncidents(pageNumber);
  }

  async function refreshList() {
    setRefresh(true);
    loadIncidents(1);
  }

  function handleNavigate({
    title,
    description,
    value,
    ong: { name, email, whatsapp },
  }) {
    navigate('Incidents', { name, email, whatsapp, title, description, value });
  }

  return (
    <Container>
      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        empty={empty}
        renderItem={({ item: incident }) => (
          <Incident style={{ elevation: 1 }}>
            <Property>ONG:</Property>
            <Value>{incident.ong.name}</Value>

            <Property>CASO:</Property>
            <Value>{incident.title}</Value>

            <Property>VALOR:</Property>
            <Value>{incident.value}</Value>

            <Button
              onPress={() => {
                handleNavigate(incident);
              }}
            >
              <ButtonText>Ver mais detalhes</ButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </Button>
          </Incident>
        )}
      />
      {loading && (
        <ActivityIndicator
          size={empty ? 'large' : 'small'}
          color="#E02041"
          style={{ marginVertical: 6 }}
        />
      )}
    </Container>
  );
}
