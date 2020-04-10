import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Context } from '../../contexts/HeaderContext';

import logoLight from '../../assets/logo.png';
import logoDark from '../../assets/Logo.png';

import { HeaderContainer, HeaderCount, HeaderCountBold } from './styles';

export default function Header() {
  const { goBack } = useNavigation();
  const { name } = useRoute();

  const { incidentsCount, theme } = useContext(Context);

  return (
    <HeaderContainer>
      <Image source={theme === 'light' ? logoLight : logoDark} />

      {name === 'Home' ? (
        <HeaderCount>
          Total de <HeaderCountBold>{incidentsCount} casos.</HeaderCountBold>
        </HeaderCount>
      ) : (
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-left" size={28} color="#E02041" />
          </TouchableOpacity>
        )}
    </HeaderContainer>
  );
}
