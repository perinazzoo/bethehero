import React, { useEffect, useState, useContext } from 'react';
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
  const { incidentsCountChange } = useContext(Context);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, headers } = await api.get('/incidents');

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

        setIncidents(formattedData);
        incidentsCountChange(headers['x-total-count']);
      } catch (err) {
        //
      }
    })();
  }, []);

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
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <Incident>
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
    </Container>
  );
}
