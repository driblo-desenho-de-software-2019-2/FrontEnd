/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Alert, View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {ListItem, Overlay} from 'react-native-elements';

import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountDown from 'react-native-countdown-component';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

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
  AnswerText,
  GoalText,
} from './styles';

export default class GameInProgress extends Component {
  state = {
    setTimer: false,
    leftPoints: 0,
    rightPoints: 0,
    playersData: '',
    setVisible: false,
    selectedGoalAuthor: [],
    assistenceAuthor: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const req = await axios.get('http://localhost:8001');
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

    this.setState({setVisible: true});
  };

  onSelectedItemsChangeGoalAuthor = async selectedGoalAuthor => {
    await this.setState({selectedGoalAuthor});
    // eslint-disable-next-line react/destructuring-assignment
    console.tron.log(this.state.selectedGoalAuthor);
  };

  playerPicker = () => {
    const {selectedGoalAuthor, playersData} = this.state;
    return (
      <View>
        <SectionedMultiSelect
          items={playersData}
          uniqueKey="id"
          selectText="Quem fez?"
          confirmText="Confirmar"
          searchPlaceholderText="Procurar Nome..."
          colors={{primary: '#07D7A5', success: '#07D7A5'}}
          onSelectedItemsChange={this.onSelectedItemsChangeGoalAuthor}
          selectedItems={selectedGoalAuthor}
          single={true}
        />
      </View>
    );
  };

  onSelectedItemsChangeAssistenceAuthor = async assistenceAuthor => {
    await this.setState({assistenceAuthor});
    // eslint-disable-next-line react/destructuring-assignment
    console.tron.log(this.state.assistenceAuthor);
  };

  selectAssistenceAuthor = () => {
    const {assistenceAuthor, playersData} = this.state;
    return (
      <View>
        <SectionedMultiSelect
          items={playersData}
          uniqueKey="id"
          selectText="Assistência"
          confirmText="Confirmar"
          searchPlaceholderText="Procurar Nome..."
          colors={{primary: '#07D7A5', success: '#07D7A5'}}
          onSelectedItemsChange={this.onSelectedItemsChangeAssistenceAuthor}
          selectedItems={assistenceAuthor}
          single={true}
        />
      </View>
    );
  };

  GoalCard = () => {
    const {setVisible} = this.state;

    return (
      <Overlay
        isVisible={setVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="#08BD64"
        height={350}
        width={280}
        overlayStyle={{
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <GoalText>GOOL</GoalText>
          <View>{this.playerPicker()}</View>
          <View>{this.selectAssistenceAuthor()}</View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {}}>
              <AnswerText>Confirmar</AnswerText>
            </TouchableOpacity>
            <TouchableOpacity>
              <AnswerText>Cancelar</AnswerText>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  };

  confirmGoal = async () => {
    const {selectedGoalAuthor, assistenceAuthor} = this.state;

    const req = await axios.post(
      ''
    );

    this.setState({setVisible: false});
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
          {this.GoalCard()}
        </Container>
      </ScrollView>
    );
  }
}
