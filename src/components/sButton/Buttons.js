import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ButtonText } from './styles'

export default function SButtons({text, ...rest}) {
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
        height:44,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        marginTop:30,
    },

})
