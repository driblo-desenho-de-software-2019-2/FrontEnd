import styled from 'styled-components/native';
import { CoverageMap } from 'istanbul-lib-coverage';

export const CardText = styled.Text`
    color: rgb(42, 219, 143);
    font-weight: bold;
    font-size: 17;
    align-self: center;
`;

export const SecondaryText = styled.Text`
    color: rgb(176, 176, 178);
    font-weight: bold;
    font-size: 16;
    align-self: center;
`;

export const CardImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: 70px;
    width: 70px;
    border-radius: 40px;
    align-self:center;
    margin-vertical:5px;
`;


