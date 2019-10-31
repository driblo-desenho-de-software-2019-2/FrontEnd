import React from 'react';
import { View, Text, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import InputBox from '../components/InputBox/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UnderLineInput from '../components/UnderLineInput/underLineInput'

const colors= ['#f5f5f5','#949494']
export default function SignUp({navigation}) {
  return (
    <LinearGradient style={styles.background} colors={['#10C971','#00FF9F']}> 
    <ImageBackground source={require('../assets/driblo-logo.png')} imageStyle={{opacity:0.2}} style={styles.logo}>
      <Icon 
          name="arrow-left"
          size={30}
          color={'#fff'}
          style={{alignSelf:'flex-start', paddingTop:20}}
          onPress={() =>{navigation.navigate('SignIn')}}
        />
        <View style={styles.inputs}>
          <UnderLineInput text={'Nome'} />
          
          
          
          <TouchableOpacity>
              <LinearGradient style={styles.backgroundButton} colors={colors}>
                  <Text style={styles.buttonText}>
                      Cadastrar
                  </Text>  
              </LinearGradient>
          </TouchableOpacity>


        </View>
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
  inputs:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'stretch'
  },
  backgroundButton:{
    height:44,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 15,
    marginTop:30,

  },
 
  buttonText:{
    color:'#000'
}
});