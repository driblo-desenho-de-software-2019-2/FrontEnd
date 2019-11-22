import React, {useState} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import InputBox from '../../components/InputBox/index';
import SButtons from '../../components/sButton/Buttons';
import {LoginBox, Container, LinkText} from './styles';
import {continueStatement} from '@babel/types';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    alignSelf: 'center',
    width: 250,
    height: 220,
    resizeMode: 'contain',
  },
});

// eslint-disable-next-line react/prop-types
export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSingUp() {
    // eslint-disable-next-line react/prop-types
    navigation.navigate('SignUp');
  }

  async function navigateToHome() {
    const data = {
      email,
      password,
    };
    const url = 'http://localhost:8002/sessions';

    await axios
      .post(url, data)
      .then(response => {
        if (response.status === 200) {
          AsyncStorage.setItem('@token', response.data.token);
          console.tron.log('RESPONSE: ', response.data);
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        console.tron.log(error.message);
        Alert.alert('Driblô', 'E-mail ou Senha Incorretos!');
      });
  }

  return (
    <LinearGradient style={styles.background} colors={['#10C971', '#00FF9F']}>
      <Image
        // eslint-disable-next-line global-require
        source={require('../../assets/driblo-logo.png')}
        style={styles.logo}
      />

      <LoginBox>
        <Container>
          <InputBox value={email} onChangeText={setEmail} text="Email" />

          <InputBox
            value={password}
            onChangeText={setPassword}
            text="Senha"
            password
          />

          <SButtons
            onPress={navigateToHome}
            text="Login"
            colors={['#00FF9F', '#10C971']}
          />

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={handleSingUp}>
              <LinkText>Criar Conta</LinkText>
            </TouchableOpacity>

            <TouchableOpacity>
              <LinkText>Esqueceu senha ?</LinkText>
            </TouchableOpacity>
          </View>
        </Container>
      </LoginBox>
    </LinearGradient>
  );
}
