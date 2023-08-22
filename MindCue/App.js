import React from 'react';
import {Text, View, SafeAreaView, ImageBackground, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, TextInput } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import UserVerification from './screens/UserVerification';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import TriggerScreen from './screens/TriggerScreen';
import ReportScreen from './screens/ReportScreen';
import QRScreen from './screens/QRScreen';
import ScreenTimeScreen from './screens/ScreenTimeScreen';
import style from './components/style';

// This should be the background image for the sign in page
// const image = { uri : './assets/images/Ellipse2.png'};

// Creating a stack allows us to Navigate between app pages
const Stack = createNativeStackNavigator();

// This is the function that is going to list all our screens
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Sign In'>
          <Stack.Screen name='Sign In' component={SignInScreen} />
          <Stack.Screen name='Sign Up' component={SignUpScreen} />
          <Stack.Screen name='User Verification' component={UserVerification} />
          <Stack.Screen name='Home Screen' component={HomeScreen} />
          <Stack.Screen name='List of triggers' component={TriggerScreen} />
          <Stack.Screen name='Report' component={ReportScreen} />
          <Stack.Screen name='Set Screen Time' component={ScreenTimeScreen} />
          <Stack.Screen name='QR Code' component={QRScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
