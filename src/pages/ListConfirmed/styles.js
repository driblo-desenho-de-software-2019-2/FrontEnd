import styled from 'styled-components/native';

export const ListBox = styled.View`
    background-color: rgb(255,255,255);
    width: 100%;
    height: 80%;
    border-radius: 10;
    marginTop: 80
`;

export const MenuBox = styled.View`
    height: 20%;
    background-color: rgb(255,255,0);
    padding: 0px 15px;
`;

export const Title = styled.Text`
    font-size:25;
    color:rgb(255,255,255)
    margin-bottom: 40;
`;

export const DateTime = styled.Text`

    font-size:20;
    color:rgb(255,255,255)
`;


export const AnswerView = styled.View`
   flex-direction: row;
`;

export const AnswerText = styled.Text`
    margin-top:40;
    color:rgb(255,255,255)
    font-size: 25;
    margin-horizontal:10;
`;
