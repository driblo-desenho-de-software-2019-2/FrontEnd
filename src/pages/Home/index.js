import React from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({tintColor}) => (
    <Icon name="account-circle" size={40} color={tintColor} />
  ),
};
