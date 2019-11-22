import React, {useState} from 'react';
import { Container,Title,
          InformationTitle,
          InformationsView,
          Informations,
          CardsView,
          GameCard,
          ScoreText,
          TeamsText,
        } from './styles';
import CardView from 'react-native-cardview'
import Card from '../../components/Card/Card'
import {View, Text, ImageBackground} from 'react-native'

export default function GameStats() {

  const [place, setPlace] = useState('Local')
  const [date, setDate] = useState('XX/XX/XX')
  const [time, setTime] = useState('XX:XX')
  const [topGoal, setTopGoal] = useState({name:'', goalsNumber:'',photo:''})
  const [topScore, setTopScore] = useState({name:'', scoreNumber:'',photo:''})
  const [topAssistants, setTopAssistants] = useState({name:'', assistantsNumber:'',photo:''})
  const [goignMatch, setGoingMatch] = useState(false)

  return (
    <Container>
      { goignMatch ? (
      <>
      <Title>Informações da pelada</Title>
        <CardView
          style={{marginTop:10}}
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>

          <InformationsView>
            <InformationTitle>Local: </InformationTitle>
            <Informations>{place}</Informations>
          </InformationsView>
          <InformationsView>
            <InformationTitle>Data: </InformationTitle>
            <Informations>{date}</Informations>
          </InformationsView>
          <InformationsView>
            <InformationTitle>Hora: </InformationTitle>
            <Informations>{time}</Informations>
          </InformationsView>
        </CardView>

        </>) :

        (<View>
          <Title>Partida em andamento</Title>
          <CardView
            style={{marginTop:10}}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
              <GameCard>
                <ImageBackground
                 source={require('../../assets/Campo.png')}
                 style={{width:'100%',height:'100%'}}>
                  <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center', marginTop:50}}>
                    <View style={{flexDirection:'row'}}>
                      <View style={{flexDirection:'column',justifyContent:'center', alignItems:'center',marginHorizontal:30 }} >
                        <TeamsText>Time</TeamsText>
                        <TeamsText>A</TeamsText>
                      </View>
                      <ScoreText>0</ScoreText>
                    </View>
                    <ScoreText>X</ScoreText>
                    <View style={{flexDirection:'row-reverse'}}>
                      <View style={{flexDirection:'column',justifyContent:'center', alignItems:'center',marginHorizontal:30}} >
                        <TeamsText>Time</TeamsText>
                        <TeamsText>B</TeamsText>
                      </View>
                      <ScoreText>0</ScoreText>
                    </View>
                  </View>

                </ImageBackground>

              </GameCard>
            </CardView>

        </View>) }

      <Title>Craques da rodada</Title>
        <CardsView>
          <Card title={"Mito"} cardName={topScore.name} subText={topScore.scoreNumber} photo={topScore.photo}/>
          <Card title={"Artilheiro"}cardName={topGoal.name} subText={topGoal.scoreNumber} photo={topGoal.photo}/>
          <Card title={"Garçom"}cardName={topAssistants.name} subText={topAssistants.scoreNumber} photo={topAssistants.photo}/>
        </CardsView>
    </Container>
  );
}
