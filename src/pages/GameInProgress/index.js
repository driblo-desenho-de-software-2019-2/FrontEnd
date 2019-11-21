/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountDown from 'react-native-countdown-component';

import SmallButtons from '../../components/SmallButton/SmallButtons';

import {
  Container,
  TimerCircle,
  MainView,
  Title,
  GameInProgressText,
  Points,
  AddPointButton,
  ScoreboardView,
} from './styles';

export default class GameInProgress extends Component {
  state = {
    setTimer: false,
    leftPoints: 0,
    rightPoints: 0,
  };

  renderTimer = () => {
    return (
      <CountDown
        size={23}
        until={600}
        onFinish={() => Alert.alert('Finished')}
        digitStyle={{
          backgroundColor: '#FFF',
        }}
        digitTxtStyle={{
          color: '#07D7A5',
          fontFamily: 'Montserrat Alternates',
          fontWeight: 'bold',
        }}
        separatorStyle={{color: '#07D7A5'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        // onPress={() => running=false}
        running
      />
    );
  };

  addPoint = pointPosition => {
    const {leftPoints, rightPoints} = this.state;
    if (pointPosition === 'left') {
      this.setState({leftPoints: leftPoints + 1});
    } else {
      this.setState({rightPoints: rightPoints + 1});
    }
  };

  render() {
    const {setTimer, leftPoints, rightPoints} = this.state;

    return (
      <Container>
        <Title>FutDriblô</Title>
        <GameInProgressText>Partidada em andamento</GameInProgressText>
        <MainView>
          <TimerCircle>
            {setTimer ? null : (
              <SmallButtons
                onPress={() => {
                  this.setState({setTimer: true});
                }}
                iconName="timer"
                text="Cronometro"
              />
            )}
            {setTimer ? this.renderTimer() : null}
          </TimerCircle>
          <ScoreboardView>
            <AddPointButton onPress={() => this.addPoint('left')}>
              <Icon name="plus" size={20} color="#fff" />
            </AddPointButton>

            <Points>{leftPoints}</Points>
            <Points>X</Points>
            <Points>{rightPoints}</Points>

            <AddPointButton onPress={() => this.addPoint('right')}>
              <Icon name="plus" size={20} color="#fff" />
            </AddPointButton>
            <SmallButtons
              style={{marginHorizontal: 5}}
              onPress={() => {}}
              iconName="close"
              text="Finalizar Partida"
            />
          </ScoreboardView>
        </MainView>
      </Container>
    );
  }
}
