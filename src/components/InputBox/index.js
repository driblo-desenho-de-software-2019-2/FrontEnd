/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Container, TInput} from './style';

// eslint-disable-next-line react/prop-types
export default function InputBox({text, password, ...rest}) {
  return (
    <Container>
      <TInput {...rest} placeholder={text} secureTextEntry={password} />
    </Container>
  );
}
