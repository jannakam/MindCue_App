import React from 'react';
import {Text, View, SafeAreaView, ImageBackground, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, TextInput } from 'react-native-paper';
import UserNavbar from './components/UserNavbar';
import HomeScreen from './screens/HomeScreen';
import UserVerification from './screens/UserVerification';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import TriggerScreen from './screens/TriggerScreen';
import ReportScreen from './screens/ReportScreen';
import QRScreen from './screens/QRScreen';
import ScreenTimeScreen from './screens/ScreenTimeScreen';
import ChatScreen from './screens/ChatScreen';
import LogScreen from './screens/LogScreen';
import ProfileScreen from './screens/ProfileScreen';
import style from './components/style';

// This should be the background image for the sign in page
// const image = { uri : './assets/images/Ellipse2.png'};

// Creating a stack allows us to Navigate between app pages
const Stack = createNativeStackNavigator();

// This is the function that is going to list all our screens
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator name='HomeScreen' initialRouteName={HomeScreen}>
        <Stack.Screen name='UserNavbar' component={UserNavbar} options={{ headerShown: false }}/>
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='UserVerification' component={UserVerification} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='TriggerScreen' component={TriggerScreen} />
        <Stack.Screen name='ReportScreen' component={ReportScreen} />
        <Stack.Screen name='ScreenTimeScreen' component={ScreenTimeScreen} />
        <Stack.Screen name='QRScreen' component={QRScreen} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
        <Stack.Screen name='LogScreen' component={LogScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
