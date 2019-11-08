import React, { useState } from 'react';
import { StyleSheet,ImageBackground, Picker } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from './styles'
import InputBox from '../../components/InputBox/index'
import SButton from '../../components/sButton/Buttons'


export default function SignUp({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

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

        <Container>
            <InputBox
                text={'Nome'}
                value={name}
                onChangeText={setName}
            />
            <InputBox
                text={'Email'}
                value={email}
                onChangeText={setEmail}
            />

            <InputBox
                text={'Senha'}
                value={password}
                onChangeText={setPassword}
                password={true}
            />
            <InputBox
                text={'Confirme a senha'}
                value={confirmPassword}
                onChangeText={setconfirmPassword}
                password={true}
            />

                <Picker
                    style={{height: 50, width: 100}}

                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                </Picker>

            <SButton onPress={() =>{navigation.navigate('RegisterSkills')}} text={'Próximo'} />
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
