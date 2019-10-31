 import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function UnderLineInput(props) {
  return (
    <View style={styles.textArea}>
      <Icon name='account' size={24} />
        <TextInput 
            style={styles.underLine}
            placeholder={props.text}
            placeholderTextColor="#000"
            autoCapitalize={'none'}
            autoCorrect={false}  
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
    underLine:{
      marginTop:25,
      height: 44,
      borderColor: '#000',
      borderBottomWidth:2,  
      color:'#fff',
      flex:1,
      opacity:0.9,
    },
    textArea:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      margin:10,
    }

});
