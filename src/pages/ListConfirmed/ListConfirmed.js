import React, { useState, useEffect } from 'react';
import { View,FlatList } from 'react-native';
import { ListItem, Button, Overlay,Text } from "react-native-elements";
import SmallButtons from '../../components/SmallButton/SmallButtons';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Title, DateTime, AnswerView,AnswerText} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListConfirmed() {

  const [DATA, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [isRandom, setRandom] = useState(false);
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
        overlayBackgroundColor="#08BD64"
        height={250}
        width={280}
        overlayStyle={{
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center'
        }}
      >
            <Title>Confirmar presença</Title>
            <View style={{flexDirection:'row'}}>
                <DateTime>Dia : </DateTime>
                <DateTime>{peladaDate.dia}</DateTime>
            </View>

            <View style={{flexDirection:'row'}}>
                <DateTime>Hora : </DateTime>
                <DateTime>{peladaDate.hora}</DateTime>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <AnswerText>Confirmar</AnswerText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AnswerText>Recusar</AnswerText>
                </TouchableOpacity>
            </View>

      </Overlay>

      <Overlay
        onBackdropPress={()=>{setRandom(false)}}
        isVisible={isRandom}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="#08BD64"
        width={280}
        height={250}
        overlayStyle={{
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center'
        }}
      >
         <Title>Sortear Times</Title>
            <View style={{marginTop:40,flexDirection:'row'}}>
                <TouchableOpacity>
                    <AnswerText>Confirmar</AnswerText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AnswerText>Recusar</AnswerText>
                </TouchableOpacity>
            </View>
      </Overlay>

      <View style={{backgroundColor:'#f5f5f5',flexDirection:'row',justifyContent:'space-between', height:'12%', alignItems:'center'}}>
        <View style={{marginLeft:20, marginRight:20,width:'38%',marginBottom:30}}>
          <SmallButtons onPress={()=>{setRandom(true)}} iconName={'shuffle'} text='Sortear times'/>
        </View>
        <View style={{width:'38%',marginBottom:30,marginLeft:25, marginRight:25}}>
          <SmallButtons iconName="person-add" text='Convidar'/>
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
      <FAB
          snackOffset= {80}
          buttonColor="#10C971"
          iconTextColor="#FFFFFF"
          onClickAction={() => {setVisible(true)}}
          visible={true}
          iconTextComponent={<Icon name={'check'} />}
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
