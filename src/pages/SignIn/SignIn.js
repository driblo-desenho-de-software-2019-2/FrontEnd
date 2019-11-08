import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View , StyleSheet, Image, TouchableOpacity}  from 'react-native';
import InputBox from '../../components/InputBox/index';
import SButtons from '../../components/sButton/Buttons';
import { LoginBox, Container,LinkText } from './styles'

export default function SignIn({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');''

    async function handleSingUp(){
        navigation.navigate('SignUp');
    }

  return (
     <LinearGradient style={styles.background} colors={['#10C971','#00FF9F']}>
      <Image
        source={require('../../assets/driblo-logo.png')}
        style={styles.logo}
      />

      <LoginBox>
        <Container>
          <InputBox
            value={email}
            onChangeText={setEmail}
            text={'Email'}
            />

          <InputBox
            value={password}
            onChangeText={setPassword}
            text={'Senha'}
            password={true}/>

          <SButtons onPress={() =>{}} text={'Login'} colors={['#00FF9F','#10C971']}/>


          <View  style={{justifyContent:"space-between",flexDirection:'row'}}>
            <TouchableOpacity onPress={handleSingUp}>
              <LinkText>
                Criar Conta
              </LinkText>
            </TouchableOpacity>

            <TouchableOpacity>
              <LinkText>
                Esqueceu senha ?
              </LinkText>
            </TouchableOpacity>
          </View>

        </Container>
      </LoginBox>
     </LinearGradient>
  );


}
const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  logo:{
    alignSelf:"center",
    width: 250,
    height: 220,
    resizeMode:'contain',

  },

});
