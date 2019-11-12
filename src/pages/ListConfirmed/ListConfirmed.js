import React, { useState, useEffect } from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import SButtons from '../../components/sButton/Buttons';
import { ListBox, MenuBox } from './styles';
import { List, ListItem } from "react-native-elements";

export default function ListConfirmed() {
  
  const [DATA, setData] = useState(undefined);
  
useEffect(()=> {
 const fetchData = async () => {
    const response = await fetch("http://www.json-generator.com/api/json/get/bRDVHpqLkO?indent=2");
    const json = await response.json();
    if(json) setData(json);
  };
  fetchData();
},[])

  return (
    <View>
      <FlatList
        data={DATA}
        //keyExtractor={(x, i) => i}
        renderItem={({ item }) =>
          <ListItem
            leftAvatar={{ source: { uri: item.picture } }}
            title={item.name}
            subtitle = {item.isActive ? 'Confirmado' : 'Não Confirmado' }
            bottomDivider            
          />}
      />
  </View>
  );
}

// const styles = StyleSheet.create({
//   buttonContainer:{
//     flexDirection:'row',
//     paddingHorizontal: 200,
//     justifyContent: 'space-between',
//   },
// });