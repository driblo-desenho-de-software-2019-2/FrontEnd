import styled from 'styled-components/native';

export const Container = styled.View`
    height: 70;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
    margin-top: 25;
    height: 44;
    border-radius: 15;
    border-color: rgb(143, 143, 147);
    background-color: rgb(143, 143, 147);
    color: rgb(255, 255, 255);
    flex: 1;
    opacity: 0.9;
`;
