import React from 'react';
import {View, Text} from 'react-native';

import soccerGroup from '../../assets/soccerGroup.png';

import {Container, GroupIcon, TabBarLabel} from './styles';

export default function Home() {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: () => <TabBarLabel>Pelada</TabBarLabel>,
  tabBarIcon: () => <GroupIcon source={soccerGroup} />,
};
