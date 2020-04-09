import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Image,
  Incident,
  Property,
  Value,
  ContactBox,
  TitleHero,
  DescriptionHero,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Incidents() {
  const { goBack } = useNavigation();

  function handleNavigate() {
    goBack();
  }

  function sendMail() {}

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={handleNavigate}>
          <Icon name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <Property first>ONG:</Property>
        <Value>APAD</Value>

        <Property>CASO:</Property>
        <Value>Cachorro atropelado</Value>

        <Property>VALOR:</Property>
        <Value>R$120,00</Value>
      </Incident>

      <ContactBox>
        <TitleHero>Salve o dia!</TitleHero>
        <TitleHero>Seja o herói desse caso.</TitleHero>

        <DescriptionHero>Entre em contato:</DescriptionHero>

        <Actions>
          <Action onPress={() => {}}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
