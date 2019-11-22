/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ButtonText, Container} from './styles';

export default function SmallButtons({iconName, text, ...rest}) {
  return (
    <TouchableOpacity {...rest}>
      <Container>
        <Icon
          name={iconName}
          size={25}
          style={{color: '#fff', marginTop: 2, marginHorizontal: 5}}
        />
        <ButtonText>{text}</ButtonText>
      </Container>
    </TouchableOpacity>
  );
}
