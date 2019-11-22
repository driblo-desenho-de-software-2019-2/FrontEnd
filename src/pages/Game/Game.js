import React from 'react';
import { Container } from './styles';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import { View, StyleSheet, Dimensions } from 'react-native';
import GameStats from './GameStats'
import ListConfirmed from '../ListConfirmed/ListConfirmed'
import GameInProgress from '../GameInProgress/index'


const FirstRoute = () => (
  <GameStats />
);

const SecondRoute = () => (
  <ListConfirmed />
);
const ThirdRoute = () => (
  <GameInProgress/>
);

export default class Game extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pelada' },
      { key: 'second', title: 'Lista' },
      { key: 'third', title: '' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#5BEBA6' }}
            labelStyle={{color:'#000'}}
            style={{backgroundColor:'#f5f5f5', height:40, }}
          />
        }
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

});
