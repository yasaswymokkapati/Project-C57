import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import JokeScreen from './screens/JokeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  HoroscopeScreen : HoroscopeScreen,
  JokeScreen : JokeScreen,
  NewsScreen : NewsScreen,
  WeatherScreen : WeatherScreen,
})

const AppContainer = createAppContainer(AppNavigator);