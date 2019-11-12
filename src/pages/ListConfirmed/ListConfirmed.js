import React, { useState, useEffect } from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import SButtons from '../../components/sButton/Buttons';
import { ListBox, MenuBox } from './styles';
import { ListItem, Button } from "react-native-elements";
import { Divider } from 'react-native-elements';



export default function ListConfirmed() {
  
  const [DATA, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  
useEffect(()=> {
 const fetchData = async () => {
    const response = await fetch("http://www.json-generator.com/api/json/get/bRDVHpqLkO?indent=2");
    const json = await response.json();
    if(json) {
      setLoading(false);
      setData(json);
    }
  };
  fetchData();
},[])

if(!isLoading){
  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-between', height:'12%', alignItems:'center'}}>
        <View style={{width:'38%',marginBottom:30}}>
          <SButtons text='Sortear times'/>
        </View>
        <View style={{width:'38%',marginBottom:30}}>
          <SButtons text='Convidar'/>
        </View>
      </View>
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
} else 
  {
    return(
      <View style={{flex:1, marginTop:280}}>
        <Button
          title="Loading button"
          loading
          type = 'clear'
        />
      </View>
    )
  }
}