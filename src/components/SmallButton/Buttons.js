import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ButtonText } from './styles'
import random from 'react-native-vector-icons/'

export default function SmallButtons({text, ...rest}) {
  return (
    <TouchableOpacity {...rest}>
        <LinearGradient colors={['#00FF9F','#10C971']} style={styles.degrade}>
            <ButtonText >
                {text}
            </ButtonText>
        </LinearGradient>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    degrade:{
        height:39,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        marginTop:30,
    },

})
