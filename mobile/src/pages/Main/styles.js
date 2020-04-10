import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px;
  color: ${({ theme }) => theme.colors.textFirst};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textSecond};
`;

export const IncidentList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.textFirst : theme.colors.textSecond};
  font-weight: bold;
`;

export const Value = styled.Text`
  margin: 8px 0 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecond};
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;
