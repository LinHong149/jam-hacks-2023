import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';

// import { StateContext, AppProvider } from './StateContext';

import HomeScreen from './screens/HomeScreen';
import FYGScreen from './screens/FYGScreen';
import GooseScreen from './screens/GooseScreen';
import ProfileScreen from './screens/ProfileScreen';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    MS: require('./fonts/Montserrat-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    // <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureDirection: 'horizontal',
            animation: 'fade'
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FYG" component={FYGScreen} />
          <Stack.Screen name="Goose" component={GooseScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    // </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
