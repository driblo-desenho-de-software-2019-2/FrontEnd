import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  padding: 20px;
`;

export const SoccerGroupInfo = styled.View`
  justify-content: center;
`;

export const SoccerImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  font-size: 25px;
  color: #fff;
  margin-top: 365px;
  margin-horizontal: 105px;
`;

export const NoGroupText = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  font-size: 45px;
  color: #9499a1;
  text-align: center;
`;

export const GroupButton = styled.TouchableOpacity`
`;

// Navigation Options
export const GroupIcon = styled.Image`
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
