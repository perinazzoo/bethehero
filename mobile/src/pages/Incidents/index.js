import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import Mailer from 'react-native-mail';

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
  const { params } = useRoute();

  const message = `Olá ${params.name}! Estou entrando em contato pois gostaria de ajudar no caso "${params.title}". Poderia me passar mais informações de como contribuir?`;

  function handleNavigate() {
    goBack();
  }

  function sendMessage() {
    Linking.openURL(
      `whatsapp://send?text=${message}&phone=+55${params.whatsapp}`
    );
  }

  function sendMail() {
    Mailer.mail(
      {
        subject: `Herói do caso: ${params.title}`,
        recipients: [params.email],
        body: message,
        isHTML: false,
      },
      () => {
        //
      }
    );
  }

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
        <Value>{params.name}</Value>

        <Property>CASO:</Property>
        <Value>{params.title}</Value>

        <Property>DESCRIÇÃO:</Property>
        <Value>{params.description}</Value>

        <Property>VALOR:</Property>
        <Value>{params.value}</Value>
      </Incident>

      <ContactBox>
        <TitleHero>Salve o dia!</TitleHero>
        <TitleHero>Seja o herói desse caso.</TitleHero>

        <DescriptionHero>Entre em contato:</DescriptionHero>

        <Actions>
          <Action onPress={sendMessage}>
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
