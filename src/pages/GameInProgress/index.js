/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Alert} from 'react-native';
import CountDown from 'react-native-countdown-component';

import SmallButtons from '../../components/SmallButton/SmallButtons';

import {
  Container,
  TimerCircle,
  TimerView,
  Title,
  GameInProgressText,
} from './styles';

export default class GameInProgress extends Component {
  state = {
    setTimer: false,
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

  render() {
    const {setTimer} = this.state;

    return (
      <Container>
        <Title>FutDriblô</Title>
        <GameInProgressText>Partidada em amdamento</GameInProgressText>
        <TimerView>
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
        </TimerView>
      </Container>
    );
  }
}
