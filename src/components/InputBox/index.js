import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, TInput } from './style';




export default function InputBox(props) {
  return (
    <Container> 
      <TInput placeholder={props.text} />
    </Container>
  );
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop:25,
        height: 44,
        borderRadius:15,
        borderColor: '#918F93',
        backgroundColor:'#918F93',
        color:'#fff',
        flex:1,
        opacity:0.9,
    },
});