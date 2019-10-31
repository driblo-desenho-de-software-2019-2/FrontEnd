import React from 'react';
import { View, TouchableOpacity, StyleSheet ,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Buttons(props) {
  return (
    <View>
        <TouchableOpacity style={styles.buttonEffect} underlayColor='#fff'>
            <LinearGradient onPress={props.funcao} style={styles.background} colors={props.colors}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>  
            </LinearGradient>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    background:{
        height:44,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        marginTop:30,
    
    },
    buttonEffect:{
        backgroundColor:'#fff'
    },
    buttonText:{
        color:'#fff'
    }
});