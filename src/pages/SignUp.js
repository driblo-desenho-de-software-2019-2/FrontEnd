import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View , Text, StyleSheet, Image} from 'react-native';
import InputBox from '../components/InputBox'

export default function SignUp() {
  return (
     <LinearGradient style={styles.background} colors={['#10C971','#00FF9F']}> 
      <Image 
        source={require('../assets/driblo-logo.png')}
        style={styles.logo}
      />
      
      <View style={styles.loginBoX}>
        <View  style={styles.container}>
          <InputBox/>
          <InputBox/>
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
  }


});