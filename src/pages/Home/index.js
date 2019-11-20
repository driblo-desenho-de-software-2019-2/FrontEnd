/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import soccerGroup from '../../assets/soccerGroup.png';

import {
  Container,
  GroupIcon,
  TabBarLabel,
  NoGroupText,
  SoccerGroupInfo,
  Title,
  GroupButton,
} from './styles';

export default class Home extends Component {
  render() {
    const group = true;

    return (
      <Container>
        {group ? (
          <View>
            <GroupButton onPress={() =>{this.props.navigation.navigate('Game')}}>
              <ImageBackground
                style={{
                  width: '100%',
                  height: '97%',
                }}
                imageStyle={{borderRadius: 20}}
                source={require('../../assets/soccer_card.jpg')}>
                <Title>FutDriblô</Title>
              </ImageBackground>
            </GroupButton>
          </View>
        ) : (
          <SoccerGroupInfo>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              imageStyle={{tintColor: '#dedede'}}
              source={require('../../assets/driblo-logo.png')}>
              <NoGroupText>Nenhum Grupo Cadastrado</NoGroupText>
            </ImageBackground>
          </SoccerGroupInfo>
        )}
        <View style={{marginTop: 120}}>
          <FAB
            snackOffset={80}
            buttonColor="#10C971"
            iconTextColor="#FFFFFF"
            onClickAction={() => {}}
            visible
          />
        </View>
      </Container>
    );
  }
}

Home.navigationOptions = {
  tabBarLabel: () => <TabBarLabel>Pelada</TabBarLabel>,
  tabBarIcon: () => <Icon name="account" size={20} />,
};
