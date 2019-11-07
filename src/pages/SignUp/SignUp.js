import React from 'react';
import {  StyleSheet,ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UnderLineInput from '../../components/UnderLineInput/UnderLineInput'
import UnderLineButton from '../../components/UnderLineButton/UnderLineButton'
import { Container } from './styles'


export default function SignUp({navigation}) {
  return (
    <LinearGradient style={styles.background} colors={['#10C971','#00FF9F']}>
    <ImageBackground source={require('../../assets/driblo-logo.png')} imageStyle={{opacity:0.2}} style={styles.logo}>
      <Icon
          name="arrow-left"
          size={30}
          color={'#000'}
          style={{alignSelf:'flex-start', paddingTop:20}}
          onPress={() =>{navigation.navigate('RegisterSkills')}}
        />

        <Container>
            <UnderLineInput text={'Nome'} icon={'account'} />
            <UnderLineInput text={'Email'} icon={'email'} />
            <UnderLineInput text={'Senha'} icon={'lock'} />
            <UnderLineInput text={'Confirmar senha'} icon={'lock-reset'} />
            <UnderLineButton text={"Próximo"} />
        </Container>

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
  logo:{

    width:'100%',
    height:'100%',
  },
});
