import React, {useState} from 'react';
import { Text,ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Points, PointsText, Header,Body, Footer, SkillText,HeaderText } from './styles';
import SButtons from '../../components/sButton/Buttons';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function RegisterSkills({navigation}) {

    const [pointsLeft, setPointsLeft] = useState(100);
    const [velocityPoints, setVelocityPoints] = useState();

    function handlePoints(skill) {


    }

  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3','#ededed']}>
        <ImageBackground source={require('../../assets/driblo-logo-preta.png')} imageStyle={{opacity:0.05}} style={styles.logo}>
        <Header>
            <Points>
                <LinearGradient style={styles.points} colors={['#00FF9F','#10C971']}>
                    <PointsText>
                        {pointsLeft}
                    </PointsText>
                </LinearGradient>
            </Points>
            <HeaderText>Pontos restantes</HeaderText>
            <Icon
            name="arrow-left"
            size={30}
            color={'#10C971'}
            style={{alignSelf:'flex-start', paddingTop:20, marginEnd:1,}}
            onPress={() =>{navigation.navigate('SignUp')}}
            />
        </Header>

        <Body>
            <SkillText>Chute</SkillText>
            <Slider
                onSlidingComplete={handlePoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
            />
            <SkillText>Passe</SkillText>
            <Slider
                onSlidingComplete={setVelocityPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
            />
            <SkillText>Drible</SkillText>
            <Slider
                onSlidingComplete={setVelocityPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
            />
            <SkillText>Velocidade</SkillText>
            <Slider
                onSlidingComplete={setVelocityPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
            />
            <SkillText>Defesa</SkillText>
            <Slider
                onSlidingComplete={setVelocityPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
            />

        </Body>

        <Footer>
            <SButtons onPress={() =>{}} text={'Cadastrar'} colors={['#00FF9F','#10C971']}/>
        </Footer>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      paddingHorizontal:20,
    },

    points:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    logo:{

      width:'100%',
      height:'100%',
    },
    slider:{
        margin:10,
    },
  });
