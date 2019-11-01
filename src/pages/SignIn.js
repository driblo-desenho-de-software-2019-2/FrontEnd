import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View , Text, StyleSheet, Image, TouchableOpacity}  from 'react-native';
import InputBox from '../components/InputBox';
import Buttons from '../components/sButton/Buttons';

export default function SignIn({navigation}) {

  async function handleSingUp(){
    navigation.navigate('SignUp');
  }

  const colors = ['#00FF9F','#10C971']

  return (
     <LinearGradient style={styles.background} colors={['#10C971','#00FF9F']}> 
      <Image 
        source={require('../assets/driblo-logo.png')}
        style={styles.logo}
      />
      
      <View style={styles.loginBoX}>
        <View  style={styles.container}>
          <InputBox text={'Email'} icon={'lock'} />
          <InputBox text={'Senha'} password={true}/>
          <Buttons funcao={handleSingUp} text={'Login'} colors={colors}/>
          
          <View  style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={handleSingUp}>
              <Text style={styles.linkText}>
                Criar Conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.linkText}>
                Esqueceu senha ?
              </Text>
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
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
  loginBoX:{

    backgroundColor:'#fff',
    width:290,
    height:270,
    borderRadius:10,
    alignItems:'center',
  },

  container:{
    flex:1,
    alignSelf:'stretch',
    paddingHorizontal:20,
  },

  linkText:{
    color:'#08BD64',
    fontWeight:'bold',
    paddingHorizontal:20,
    marginTop:20,
  },


});