import React, { useState } from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import SButtons from '../../components/sButton/Buttons';
import { ListBox, MenuBox } from './styles';
// import { Container } from './styles';


// obj.push({
//     nome: 'BBBBBBBB',
//     img: 'qwe.png'
// });
// obj.push({
//     nome: 'CCCCCCCC',
//     img: 'zxc.png'
// });
// obj.push({
//     nome: 'DDDDDD',
//     img: 'qaz.png'
// });

export default function ListConfirmed() {
  
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Rafael Teodosio',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Caio',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Byron',
    },
    {
      id: '62184a0f-1da1-4411f-bd92-1123531411e29d72',
      name: 'Matheus',
    },
  ];


  return (
    <View >
      <MenuBox/>
      <View >
        <View style={styles.buttonContainer}>
          <SButtons text='Sortear'/>
          <SButtons text='Convidar'/>
        </View>
      </View>
    <ListBox>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Text >{item.name}</Text>}
    />
    </ListBox>
  </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection:'row',
    paddingHorizontal: 200,
    justifyContent: 'space-between',
  },
});