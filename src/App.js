import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Results from './screens/Results';
import Favourites from './screens/Favourites';
import ShowPicture from './screens/ShowPicture';

const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {

    super(props);

  }

  render () {

    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={Home} />
          <Stack.Screen name="Result" component={Results} />
          <Stack.Screen name="Poster" component={ShowPicture} />
          <Stack.Screen name="Favourites" component={Favourites} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
}

export default App;
