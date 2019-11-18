/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Alert, TouchableOpacity, Text} from 'react-native';
import CountDown from 'react-native-countdown-component';

import {Container} from './styles';

export default class GameInProgress extends Component {
  state = {
    setTimer: false,
  };

  renderTimer = () => {
    return (
      <CountDown
        size={15}
        until={600}
        onFinish={() => Alert.alert('Finished')}
        digitStyle={{
          backgroundColor: '#FFF',
        }}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        running
      />
    );
  };

  render() {
    const {setTimer} = this.state;
    return (
      <Container>
        <TouchableOpacity
          onPress={() => {
            this.setState({setTimer: true});
          }}>
          <Text>TESTE AQUI</Text>
        </TouchableOpacity>
        {setTimer ? this.renderTimer() : null}
      </Container>
    );
  }
}
