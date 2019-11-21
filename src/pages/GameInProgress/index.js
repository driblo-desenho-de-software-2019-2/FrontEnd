/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Alert, View, ScrollView} from 'react-native';
import {Image, ListItem} from 'react-native-elements';

import axios from 'axios';
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
  PlayersListView,
  TeamName,
  PlayersList,
  FlatListItemSeparator,
  Name,
} from './styles';

export default class GameInProgress extends Component {
  state = {
    setTimer: false,
    leftPoints: 0,
    rightPoints: 0,
    playersData: '',
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const req = await axios.get(
      'http://www.json-generator.com/api/json/get/bRDVHpqLkO?indent=2'
    );
    this.setState({playersData: req.data});

    console.tron.log('data', req.data);
  };

  renderTimer = () => {
    return (
      <CountDown
        size={23}
        until={600}
        onFinish={() => Alert.alert('Finished')}
        digitStyle={{
          backgroundColor: '#f5f5f5',
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

  renderPlayersList(teamName) {
    const {playersData} = this.state;

    let listSide;

    if (teamName === 'Time 1') {
      listSide = 'flex-start';
    } else {
      listSide = 'flex-end';
    }
    return (
      <PlayersList
        contentContainerStyle={{alignItems: listSide}}
        data={playersData}
        renderItem={({item}) => (
          <ListItem
            leftAvatar={{source: {uri: item.picture}}}
            title={item.name}
            bottomDivider
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }

  render() {
    const {setTimer, leftPoints, rightPoints} = this.state;

    return (
      <ScrollView>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TeamName>Time 1</TeamName>
            <TeamName>Time 2</TeamName>
          </View>
          <PlayersListView>
            {this.renderPlayersList('Time 1')}
            {this.renderPlayersList('Time 2')}
          </PlayersListView>
        </Container>
      </ScrollView>
    );
  }
}
