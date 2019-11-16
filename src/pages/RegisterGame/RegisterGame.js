import React, {useState} from 'react';
import { Text, StyleSheet,ImageBackground, Picker } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputBox from '../../components/InputBox/index'
import SButton from '../../components/sButton/Buttons'
import DatePicker from '../../components/DatePicker/DatePicker'

// import { Container } from './styles';

export default function RegisterGame({ navigation }) {

    const [name, setName ] = useState('');
    const [place, setPlace ] = useState('');
    const [fieldType, setfieldType ] = useState('');

  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3','#ededed']}>
        <ImageBackground source={require('../../assets/driblo-logo-preta.png')} imageStyle={{opacity:0.05}} style={styles.logo}>
            <Icon
            name="arrow-left"
            size={30}
            color={'#10C971'}
            style={{alignSelf:'flex-start', paddingTop:20}}
            onPress={() =>{navigation.navigate('SignIn')}}
            />

            <InputBox
                text={'Nome da pelada'}
                value={name}
                onChangeText={setName}
            />
            <InputBox
                text={'Local da pelada'}
                value={place}
                onChangeText={setPlace}
            />

            <InputBox
                text={'Tipo de campo'}
                value={fieldType}
                onChangeText={setfieldType}
            />

            <DatePicker mode={'date'}/>
            <DatePicker mode={'time'}/>

            <SButton text={'Cadastrar'} />
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

