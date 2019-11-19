import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fefefe;
  padding: 20px;
`;

export const StartTimerText = styled.Text`
  font-family: Montserrat-ExtraBold;
  font-size: 10px;
  color: #ffff;
  text-align: left;
  margin-top: 5px;
`;

export const TimerCircle = styled.ImageBackground`
  border: 5px solid #07d7a5;
  border-radius: 100px;
  border-width: 3px;
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const TimerView = styled.View`
  flex-direction: row;
`;

export const StartTimerButton = styled.TouchableOpacity``;
