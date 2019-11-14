import React from 'react';

import {View, Text, Image} from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Teste',
  tabBarIcon: () => (
    <Image
      // eslint-disable-next-line global-require
      source={require('../../assets/account_circle_black.png')}
      style={{width: 50, height: 50}}
    />
  ),
};
