import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  padding: 20px;
`;

// Views
export const MainView = styled.View`
  flex-direction: row;
`;

export const ScoreboardView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-left: 25px;
`;

export const PlayersListView = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

// Text
export const TeamName = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
`;

export const StartTimerText = styled.Text`
  font-family: Montserrat-ExtraBold;
  font-size: 10px;
  color: #ffff;
  text-align: left;
  margin-top: 5px;
`;

export const GameInProgressText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #07d7a5;
  margin-vertical: 5px;
`;

export const Title = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  color: #000;
  text-align: center;
`;

export const Name = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const Points = styled.Text`
  font-family: Montserrat-Alternates;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #07d7a5;
  margin-bottom: 30px;
`;

// Buttons
export const StartTimerButton = styled.TouchableOpacity``;

export const AddPointButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background-color: #10c971;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  elevation: 10px;
  margin-top: 30px;
  margin-horizontal: 5px;
`;

// Image Background
export const TimerCircle = styled.ImageBackground`
  border: 5px solid #07d7a5;
  border-radius: 100px;
  border-width: 3px;
  height: 140px;
  width: 140px;
  margin-bottom: 15px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

// Flatlist
export const PlayersList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 10,
  },
})``;
