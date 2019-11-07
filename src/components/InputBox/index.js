import React from 'react';
import { Container, TInput } from './style';




export default function InputBox({text, password, ... rest}) {
  return (
    <Container>
      <TInput {... rest} placeholder={text} secureTextEntry={password} />
    </Container>
  );
}
