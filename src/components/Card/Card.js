import React from 'react';
import { CardText, CardImage, SecondaryText } from './styles'
import CardView from 'react-native-cardview'
import {View, StyleSheet} from 'react-native'

export default function Card({ title, subText, cardName, imageUrl }) {
  return (
    <CardView
        style={styles.card}
        cardElevation={3}
        cardMaxElevation={3}
        cornerRadius={8}
    >
        <CardText>{title}</CardText>
        <CardImage
            source={{uri: imageUrl}}
        />
        <SecondaryText>{cardName}</SecondaryText>
        <CardText>{subText}</CardText>

    </CardView>
  );
}

const styles = StyleSheet.create({
    card:{
        height:160,
        width:110,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    }
})
