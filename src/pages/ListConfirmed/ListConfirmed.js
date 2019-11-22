import React, { useState, useEffect } from 'react';
import { View,FlatList,TouchableOpacity,Clipboard } from 'react-native';
import { ListItem, Button, Overlay,} from "react-native-elements";
import SmallButtons from '../../components/SmallButton/SmallButtons';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage';
import { Title,
          DateTime,
          AnswerText,
          ButtonView,
          LinkText, } from './styles'
import axios from 'axios';


export default function ListConfirmed() {

  const [DATA, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [isPresent, setPresent] = useState(false);
  const [isRandom, setRandom] = useState(false);
  const [isInvite, setInvite] = useState(false);
  const [gameId, setGameId] = useState();

  const [peladaDate,setPeladaDate] = useState({dia:'XX/XX/XXXX',hora:'XX:XX'});
  const baseUrl = "http://localhost:8001"

  async function copyToClipBoard(){
    Clipboard.setString(`driblo://driblo/driblo/${gameId}`);
    setInvite(false);
  }


  async function handleShuffleTeam(){
    const data = {players:DATA}
    await axios.post(`${baseUrl}/pelada/${gameId}/formTeams`,data).then(response =>{

    });

  }

 async function handleConfirm(){

    const userPresent = {userPresent: !isPresent};
    await axios.put(`${baseUrl}/users/3/pelada/${gameId}`,userPresent).then(response =>{
      setVisible(false);
      setPresent(!isPresent)
    });

}
  useEffect(() =>{
    const fetchData = async () =>{
      await axios.get(`${baseUrl}/pelada/${gameId}/users-presents`).then(response =>{
                  setData(response.data.users);
                  setLoading(false);
    });
    const peladaId = await AsyncStorage.getItem('@idPelada')
    setGameId(peladaId)
  }
  fetchData()},[isPresent]);

  if(!isLoading){
  return (
    <View style={{flex:1}}>
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
            <Title>{!isPresent ? 'Confirmar' : 'Desmarcar'} presença</Title>
            <View style={{flexDirection:'row'}}>
                <DateTime>Dia : </DateTime>
                <DateTime>{peladaDate.dia}</DateTime>
            </View>

            <View style={{flexDirection:'row'}}>
                <DateTime>Hora : </DateTime>
                <DateTime>{peladaDate.hora}</DateTime>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={handleConfirm}>
                <AnswerText>{!isPresent ? 'Confirmar' : 'Desmarcar'} </AnswerText>
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
                    <AnswerText onPress={handleShuffleTeam}>Confirmar</AnswerText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AnswerText>Recusar</AnswerText>
                </TouchableOpacity>
            </View>
      </Overlay>

      <Overlay
        onBackdropPress={()=>{setInvite(false)}}
        isVisible={isInvite}
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
        <Title>Link para convidados</Title>
        <LinkText>driblo://driblo/driblo/{gameId}</LinkText>
        <TouchableOpacity>
          <AnswerText onPress={copyToClipBoard}>Copiar</AnswerText>
        </TouchableOpacity>

      </Overlay>

      <ButtonView>
        <View style={{width:'38%'}}>
          <SmallButtons onPress={()=>{setRandom(true)}} iconName={'shuffle'} text='Sortear times'/>
        </View>
        <View style={{width:'38%'}}>
          <SmallButtons onPress={() =>{setInvite(true)}} iconName="person-add" text='Convidar'/>
        </View>
      </ButtonView>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <ListItem
            leftAvatar={{ source: { uri: item.picture } }}
            title={item.name}
            subtitle = "Confirmado"
            containerStyle={{backgroundColor:"#f5f5f5"}}
            bottomDivider
          />}
      />
      <FAB
          snackOffset= {80}
          buttonColor="#10C971"
          iconTextColor="#FFFFFF"
          onClickAction={() => setVisible(true)}
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
