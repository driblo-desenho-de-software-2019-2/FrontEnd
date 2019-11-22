import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Container, Title,GameText } from './styles';
import Buttons from '../../components/sButton/Buttons'
import axios from 'axios';

export default function Invitation(props) {

  const { params } = props.navigation.state;
  const [gameName, setGameName] = useState('');
  const baseUrl = 'http://localhost:8001'

  async function handleConfirm () {

    const data = {userId: 1, peladaId: params.id}
    await axios.post(`${baseUrl}/peladaUser/`,data).then(response =>{
      props.navigation.navigate('Home');
    })
  }

  useEffect(() =>{
    const fetchData = async () =>{
      await axios.get(`${baseUrl}/pelada/${params.id}`).then(response =>{
                  setGameName(response.data.name);
    });
  }
  fetchData()},[]);

  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3', '#ededed']}>
    <ImageBackground
      source={require('../../assets/driblo-logo-preta.png')}
      imageStyle={{opacity: 0.05}}
      style={styles.logo} >
      <View style={styles.teste}>
        <Title>Voce foi convidado para a pelada</Title>
        <GameText>{gameName}</GameText>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:50, }}>

        <Buttons text={'Confirmar presença'} onPress={handleConfirm} />
        <Buttons text={'Cancelar presença'} />

      </View>

    </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  teste:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  }
});
