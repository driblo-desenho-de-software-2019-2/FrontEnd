import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ButtonText } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SmallButtons({text, ...rest}) {
    const [type, setType] = useState('');
    useEffect(()=>{
        if(text==='Sortear times'){
            setType('random');
        }else{
            setType('user-plus');
        }
    },[])
    return (
    <TouchableOpacity {...rest}>
        <LinearGradient colors={['#00FF9F','#10C971']} style={styles.degrade}>
            <Icon name={type} size={18} style={{marginTop:2,marginRight:12}}/>
            <ButtonText>
                {text}
            </ButtonText>
        </LinearGradient>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    degrade:{
        
        height:33,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        marginTop:30,
    },

})
