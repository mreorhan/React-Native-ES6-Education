import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Landing from './src/screens/landing';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Fetch from './src/screens/fetch';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Landing,
    },
    Fetch
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    );
  }
}