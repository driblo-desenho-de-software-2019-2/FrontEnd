import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Input } from './styles'

export default function UnderLineInput({icon, text}) {
  return (
    <Container>
      <Icon style={{marginTop:35,marginHorizontal:10}} name={icon} size={40} />
        <Input

            placeholder={text}
            placeholderTextColor="#212121"
            autoCapitalize={'none'}
            autoCorrect={false}

        />
    </Container>
  );
}
