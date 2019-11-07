import React from 'react';
import { Text } from 'react-native';
import { Container, Outline, ButtonText } from './styles'

export default function UnderLineButton({text}) {
  return (

    <Container>
        <Outline>
            <ButtonText>
                {text}
            </ButtonText>
        </Outline>
    </Container>
    );
}
