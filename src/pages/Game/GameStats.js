import React, {useState} from 'react';
import { Container,Title,InformationTitle, InformationsView, Informations,CardsView} from './styles';
import CardView from 'react-native-cardview'
import Card from '../../components/Card/Card'

export default function GameStats() {

  const [place, setPlace] = useState('Local')
  const [date, setDate] = useState('XX/XX/XX')
  const [time, setTime] = useState('XX:XX')
  const [topGoal, setTopGoal] = useState({name:'', goalsNumber:'',photo:''})
  const [topScore, setTopScore] = useState({name:'', scoreNumber:'',photo:''})
  const [topAssistants, setTopAssistants] = useState({name:'', assistantsNumber:'',photo:''})

  return (
    <Container>
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

      <Title>Craques da rodada</Title>
        <CardsView>
          <Card title={"Mito"} cardName={topScore.name} subText={topScore.scoreNumber} photo={topScore.photo}/>
          <Card title={"Artilheiro"}cardName={topGoal.name} subText={topGoal.scoreNumber} photo={topGoal.photo}/>
          <Card title={"Garçom"}cardName={topAssistants.name} subText={topAssistants.scoreNumber} photo={topAssistants.photo}/>
        </CardsView>
    </Container>
  );
}
