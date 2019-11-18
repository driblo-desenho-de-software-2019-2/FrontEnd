import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(245, 245, 245);
  align-items: center;
  justify-content: space-around;
`;
export const StatisticView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
    font-size:25
    align-self: flex-start;
    margin-left: 20;
    margin-vertical: 20px;

`;

// Navigation Options
export const AccountIcon = styled.Image`
  margin-top: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;

export const TabBarLabel = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  font-size: 17px;
  color: #000;
  margin-top: 30px;
  margin-left: 20px;
`;
