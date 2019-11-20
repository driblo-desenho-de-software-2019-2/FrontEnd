import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #f5f5f5;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top:20px;
  font-size:25;
  color: #7e7e7e

`;
export const InformationTitle = styled.Text`
  font-size:17;
  font-weight:bold;
  margin-left:10;
  margin-bottom:10;

`;

export const InformationsView = styled.View`
  flex-direction: row;
  width:100%;
  flex-wrap: wrap;
  margin-top:10;
`;

export const Informations = styled.Text`
  font-size:15;
  margin-left: 60%;
`;

export const CardsView = styled.View`
  flex-direction: row;
  margin-top:10;
`;

export const GameCard = styled.View`
  height:175;
  width: 350;
  align-items:center;
  justify-content: center;
`;

export const ScoreText = styled.Text`
  font-size:50;
  color: #fff;
  font-weight: bold;

`;

export const TeamsText = styled.Text`
  font-size:25;
  color: #fff;
  font-weight: bold;
`;
