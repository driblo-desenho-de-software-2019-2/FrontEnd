import {React} from 'react';

import {Text, Image} from 'react-native';

import {Container, GroupIcon, TabBarLabel} from './styles';

export default function Home() {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Teste',
  tabBarIcon: () => (
    <Image
      // eslint-disable-next-line global-require
      source={require('../../assets/soccerGroup.png')}
      style={{width: 50, height: 50}}
    />
  ),
};
