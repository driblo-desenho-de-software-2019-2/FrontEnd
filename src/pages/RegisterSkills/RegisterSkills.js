import React, {useState} from 'react';
import { View,Text,ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Points, PointsText, Header,Body, Footer, SkillText,HeaderText, SliderView } from './styles';
import SButtons from '../../components/sButton/Buttons';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function RegisterSkills({navigation}) {

    const [pointsLeft, setPointsLeft] = useState(100);
    const [velocityPoints, setVelocityPoints] = useState(0);
    const [kickPoints, setKickPoints] = useState(0);
    const [defensePoints, setDefensePoints] = useState(0);
    const [tricksPoints, setTricksPoints] = useState(0);
    const [passPoints, setPassPoints] = useState(0);



  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3','#ededed']}>
        <ImageBackground source={require('../../assets/driblo-logo-preta.png')} imageStyle={{opacity:0.05}} style={styles.logo}>
        <Header>
        <Icon
            name="arrow-left"
            size={30}
            color={'#10C971'}
            style={{alignSelf:'flex-start', paddingTop:20, marginEnd:1,}}
            onPress={() =>{navigation.navigate('SignUp')}}
            />
            <HeaderText>Pontos restantes</HeaderText>
            <Points>
                <LinearGradient style={styles.points} colors={['#00FF9F','#10C971']}>
                    <PointsText>
                        {pointsLeft}
                    </PointsText>
                </LinearGradient>
            </Points>


        </Header>
        <Body>
            <SliderView>
                <SkillText>Chute</SkillText>
                <SkillText style={{marginLeft:235,}}>{kickPoints}pts</SkillText>
            </SliderView>

            <Slider
                onValueChange={setKickPoints}
                value={kickPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={pointsLeft}
                step={5}
                thumbTintColor={'#10C971'}
                minimumTrackTintColor={'#00FF9F'}

            />
            <SliderView>
                <SkillText>Passe</SkillText>
                <SkillText style={{marginLeft:235,}}>{passPoints}pts</SkillText>
            </SliderView>
            <Slider
                onSlidingComplete={setPassPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={pointsLeft}
                step={5}
                thumbTintColor={'#10C971'}
                minimumTrackTintColor={'#00FF9F'}
            />
            <SliderView>
                <SkillText>Drible</SkillText>
                <SkillText style={{marginLeft:235,}}>{tricksPoints}pts</SkillText>
            </SliderView>
            <Slider
                onSlidingComplete={setTricksPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={pointsLeft}
                step={5}
                thumbTintColor={'#10C971'}
                minimumTrackTintColor={'#00FF9F'}
            />
            <SliderView>
                <SkillText>Velocidade</SkillText>
                <SkillText style={{marginLeft:'50%'}}>{velocityPoints}pts</SkillText>
            </SliderView>
            <Slider
                onSlidingComplete={setVelocityPoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={pointsLeft}
                step={5}
                thumbTintColor={'#10C971'}
                minimumTrackTintColor={'#00FF9F'}
            />
            <SliderView>
                <SkillText>Defesa</SkillText>
                <SkillText style={{marginLeft:225,}}>{defensePoints}pts</SkillText>
            </SliderView>
            <Slider
                onSlidingComplete={setDefensePoints}
                style={styles.slider}
                minimumValue={0}
                maximumValue={pointsLeft}
                step={5}
                thumbTintColor={'#10C971'}
                minimumTrackTintColor={'#00FF9F'}
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
