/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {Mixpanel} from 'mixpanel-react-native';

const mixpanel = new Mixpanel('a9e3bb20628241b91a8d2966fa757c76');
mixpanel.init().then(r => console.log('mixpanel initialized ' + r));
mixpanel.setLoggingEnabled(true);

function DetailsScreen({navigation}) {
  mixpanel.track('Landed_On', {Screen: 'Details'});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details Two"
        onPress={() => navigation.navigate('DetailsTwo')}
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  mixpanel.track('Landed_On', {Screen: 'Home'});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailTwoScreen({navigation}) {
  mixpanel.track('Landed_On', {Screen: 'Details Two'});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Two Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="DetailsTwo" component={DetailTwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
