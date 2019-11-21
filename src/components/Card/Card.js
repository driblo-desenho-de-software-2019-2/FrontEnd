import React from 'react';
import CardView from 'react-native-cardview';
import {StyleSheet} from 'react-native';
import {CardText, CardImage, SecondaryText} from './styles';

// eslint-disable-next-line react/prop-types
export default function Card({title, subText, cardName, imageUrl}) {
  return (
    <CardView
      // eslint-disable-next-line no-use-before-define
      style={styles.card}
      cardElevation={3}
      cardMaxElevation={3}
      cornerRadius={8}>
      <CardText>{title}</CardText>
      <CardImage source={{uri: imageUrl}} />
      <SecondaryText>{cardName}</SecondaryText>
      <CardText>{subText}</CardText>
    </CardView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
