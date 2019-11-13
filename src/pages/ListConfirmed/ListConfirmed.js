import React, { useState, useEffect } from 'react';
import { View,FlatList } from 'react-native';
import SButtons from '../../components/sButton/Buttons';
import { ListItem, Button, Overlay,Text } from "react-native-elements";
import SmallButtons from '../../components/SmallButton/Buttons';
import FAB from 'react-native-fab';

export default function ListConfirmed() {
  
  const [DATA, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [peladaDate,setPeladaDate] = useState({dia:'XX/XX/XXXX',hora:'XX:XX'});
  
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
      <Overlay  
        onBackdropPress={()=>{setVisible(false)}} 
        isVisible={isVisible} 
        windowBackgroundColor="rgba(255, 255, 255, .5)" 
        overlayBackgroundColor="#10A971"
        width={'70%'}
        height={'40%'}
        overlayStyle={{
          borderRadius: 30,shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
          elevation: 24,
          alignItems:'center',
        }}
      >
          <Text h4 style={{color:'white'}}>Confirmar Presença</Text>
          <Text h5 style={{color:'white', marginTop:50}}>Dia: {peladaDate.dia}</Text>
          <Text h5 style={{color:'white', marginTop:10}}>Hora: {peladaDate.hora}</Text>
          <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-between'}}>
          <Button
            buttonStyle={{
              backgroundColor:'red', 
              width:110, 
              borderRadius:10,
              shadowOffset: {
              width: 0,
              height: 12,
            },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 12,
            }}
            title='RECUSAR'
          />
          <Button
            buttonStyle={{
              shadowOffset: {
              width: 0,
              height: 12,
            },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 12,
              backgroundColor:'#00FF9F', 
              marginLeft:20,
              marginRight:0, 
              borderRadius:10
            }}
            title='CONFIRMAR'
            
          />
          </View>
      </Overlay>
      <View style={{backgroundColor:'#FFF',flexDirection:'row',justifyContent:'space-between', height:'12%', alignItems:'center'}}>
        <View style={{marginLeft:20, marginRight:20,width:'38%',marginBottom:30}}>
          <SmallButtons text='Sortear times'/>
        </View>
        <View style={{width:'38%',marginBottom:30,marginLeft:25, marginRight:25}}>
          <SmallButtons text='Convidar'/>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <ListItem
            leftAvatar={{ source: { uri: item.picture } }}
            title={item.name}
            subtitle = {item.isActive ? 'Confirmado' : 'Não Confirmado' }
            bottomDivider            
          />}
      />
      <FAB snackOffset= {80} buttonColor="#10C971" iconTextColor="#FFFFFF" onClickAction={() => {setVisible(true)}} visible={true} />
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