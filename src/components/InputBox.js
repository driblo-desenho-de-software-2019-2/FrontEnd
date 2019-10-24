import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';




export default function InputBox() {
  return (
    <View > 
        <TextInput 
            style={styles.inputBox} 
            placeholder="teste"
            />
            
    </View>
  );
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop: 25,
        borderWidth:1,
        borderColor:'#ddd',
        height: 44,
        borderRadius:15,
    }
});