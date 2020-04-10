import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px 24px 0;
`;

export const HeaderCount = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecond};
`;

export const HeaderCountBold = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textFirst};
`;
