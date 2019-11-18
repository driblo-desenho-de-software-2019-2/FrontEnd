import React, {useState, useEffect} from 'react';
import {Text, Dimensions, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Card from '../../components/Card/Card';
import accountProfile from '../../assets/accountProfile.png';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {
  Container,
  StatisticView,
  Title,
  TabBarLabel,
  AccountIcon,
} from './styles';

export default function Profile() {
  const [velocityPoints, setVelocityPoints] = useState(0);
  const [kickPoints, setKickPoints] = useState(0);
  const [defensePoints, setDefensePoints] = useState(0);
  const [tricksPoints, setTricksPoints] = useState(0);
  const [passPoints, setPassPoints] = useState(0);
  const [token,setToken] = useState(undefined);

  useEffect(()=>{
    axios.get('http://localhost:8002/users/1', {
      headers: {
        authorization: token
      }
    })
    .then(function (response) {
      console.tron.log('LOGADO ',response.data);
      setVelocityPoints(response.data.speed);
      setKickPoints(response.data.kick);
      setDefensePoints(response.data.defense);
      setTricksPoints(response.data.dribble);
      setPassPoints(response.data.pass);
    })
    .catch(function (error) {
      console.tron.log(error);
    })
    .finally(function () {
      // always executed
    }); 
  },[token])

  useEffect(()=>{

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@token')
        if(value !== null) {
          setToken(value);
          console.tron.log('token',value);
        }
      } catch(e) {
        // error reading value
      }
    }
    getData();
  },[])

  let deviceWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0.0,
    color: (opacity = 1) => `rgba(14,181,102, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ['Chute', 'Passe', 'Drible', 'Velocidade ', 'Defesa'],
    datasets: [
      {
        data: [
          kickPoints,
          passPoints,
          tricksPoints,
          velocityPoints,
          defensePoints,
        ],
      },
    ],
  };

  return (
    <Container>
      <BarChart
        data={data}
        width={deviceWidth - 20}
        height={220}
        yAxisSuffix={' %'}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />
      <View>
        <Title>Estatísticas</Title>
        <StatisticView>
          <Card title={'Artilheiro'} cardName={'Lucas'} subText={'pts'} />
          <Card title={'Vitorias'} cardName={'30'} subText={'Assisitencia'} />
          <Card title={'Artilheiro'} subText={'3'} />
        </StatisticView>
      </View>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: () => <TabBarLabel>Perfil</TabBarLabel>,
  tabBarIcon: () => <AccountIcon source={accountProfile} />,
};
