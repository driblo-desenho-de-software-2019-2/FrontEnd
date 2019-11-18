import React, {useState} from 'react';
import {Text, Dimensions, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Card from '../../components/Card/Card';
import accountProfile from '../../assets/accountProfile.png';

import {
  Container,
  StatisticView,
  Title,
  TabBarLabel,
  AccountIcon,
} from './styles';

export default function Profile() {
  const [velocityPoints, setVelocityPoints] = useState(20);
  const [kickPoints, setKickPoints] = useState(50);
  const [defensePoints, setDefensePoints] = useState(10);
  const [tricksPoints, setTricksPoints] = useState(5);
  const [passPoints, setPassPoints] = useState(80);

  let deviceWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0.0,
    color: (opacity = 1) => `rgba(14,181,102, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ['Chute', 'Passe', 'Drible', 'Velocidade', 'Defesa'],
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
        width={deviceWidth - 50}
        height={200}
        yAxisSuffix={' Pts'}
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
