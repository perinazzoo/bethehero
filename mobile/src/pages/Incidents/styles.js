import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 24px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

export const Image = styled.Image``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.textFirst : theme.colors.textSecond};
  font-weight: bold;
  margin-top: ${({ first }) => (first ? 0 : '24px')};
`;

export const Value = styled.Text`
  margin: 8px;
  font-size: 15px;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.textSecond : theme.colors.textThird};
`;

export const ContactBox = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;

export const TitleHero = styled.Text`
  color: ${({ theme }) => theme.colors.textFirst}
  font-weight: bold;
  font-size: 20px;
`;

export const DescriptionHero = styled.Text`
  color: ${({ theme }) => theme.colors.textSecond};
  margin-top: 16px;
  font-size: 15px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
