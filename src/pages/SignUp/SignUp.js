import React, {useState} from 'react';
import {StyleSheet, ImageBackground, Picker, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputBox from '../../components/InputBox/index';
import SButtons from '../../components/sButton/Buttons';

import {Container, Role} from './styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

// eslint-disable-next-line react/prop-types
export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [role, setRole] = useState('atacante');

  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3', '#ededed']}>
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('../../assets/driblo-logo-preta.png')}
        imageStyle={{opacity: 0.05}}
        style={styles.logo}>
        <Icon
          name="arrow-left"
          size={30}
          color="#10C971"
          style={{alignSelf: 'flex-start', paddingTop: 20}}
          onPress={() => {
            // eslint-disable-next-line react/prop-types
            navigation.navigate('SignIn');
          }}
        />
        <ScrollView>
          <Container>
            <InputBox text="Nome" value={name} onChangeText={setName} />
            <InputBox text="Email" value={email} onChangeText={setEmail} />

            <InputBox
              text="Senha"
              value={password}
              onChangeText={setPassword}
              password
            />
            <InputBox
              text="Confirme a senha"
              value={confirmPassword}
              onChangeText={setconfirmPassword}
              password
            />
            <Role>Posição:</Role>
            <Picker
              style={{height: 50, width: 180}}
              onValueChange={itemValue => setRole(itemValue)}
              selectedValue={role}>
              <Picker.Item label="Atacante" value="atacante" />
              <Picker.Item label="Meio-campo" value="meio-campo" />
              <Picker.Item label="Zagueiro" value="zagueiro" />
            </Picker>

            <SButtons
              onPress={() => {
                // eslint-disable-next-line react/prop-types
                navigation.navigate('RegisterSkills', {
                  name,
                  email,
                  password,
                  role,
                });
              }}
              text="Próximo"
            />
          </Container>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  );
}
