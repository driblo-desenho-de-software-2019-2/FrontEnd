/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, {Component, useState, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
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

export default function Home({navigation}) {
  const group = true;
  const baseUrl = 'http://localhost:8001'
  const [idPelada, setIdPelada] = useState();
  const [namePelada, setNamePelada] = useState();


  useEffect(() =>{
    const fetchData = async () =>{
      await axios.get(`${baseUrl}/users/1`).then(async response =>{
      setIdPelada(response.data.peladas[0].id);
      setNamePelada(response.data.peladas[0].name);
      console.tron.log('ID',response.data.peladas[0].id)
      await AsyncStorage.setItem('@idPelada', JSON.stringify(response.data.peladas[0].id));
    });
  }
  fetchData()},[]);

  return (
    <Container>
    {group ? (
      <View>
        <GroupButton onPress={() =>{navigation.navigate('Game')}}>
          <ImageBackground
            style={{
              width: '100%',
              height: '97%',
            }}
            imageStyle={{borderRadius: 20}}
            source={require('../../assets/soccer_card.jpg')}>
            <Title>{namePelada}</Title>
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

Home.navigationOptions = {
  tabBarLabel: () => <TabBarLabel>Pelada</TabBarLabel>,
  tabBarIcon: () => <Icon name="account" size={20} />,
};
