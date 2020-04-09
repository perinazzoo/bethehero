import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Logo,
  HeaderCount,
  HeaderCountBold,
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

  function handleNavigate() {
    navigate('Incidents');
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderCount>
          Total de <HeaderCountBold>0 casos.</HeaderCountBold>
        </HeaderCount>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <Property>ONG:</Property>
            <Value>APAD</Value>

            <Property>CASO:</Property>
            <Value>Cachorro atropelado</Value>

            <Property>VALOR:</Property>
            <Value>R$120,00</Value>

            <Button
              onPress={() => {
                handleNavigate();
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
