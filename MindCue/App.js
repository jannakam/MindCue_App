import React, { useState, useEffect, useRef } from 'react';
import {Text, View, SafeAreaView, ImageBackground, Button,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, RadioButton, TextInput } from 'react-native-paper';
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
import DoctorNavbar from './components/DoctorNavbar';
import DoctorVerification from './screens/DoctorVerification';
import DoctorHome from './screens/DoctorHome';
import DoctorProfile from './screens/DoctorProfile';
import Patient from './screens/Patient';
import DoctorEdit from './screens/DoctorEdit';
import DoctorChatScreen from './screens/DoctorChatScreen';
import DoctorContacts from './screens/DoctorContacts';
import AddPatient from './screens/AddPatient'
import LogScreen from './screens/LogScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditScreen from './screens/EditScreen';
import style from './components/style';
import DoctorChat from './screens/DoctorChat';
// This should be the background image for the sign in page
// const image = { uri : './assets/images/Ellipse2.png'};

// Creating a stack allows us to Navigate between app pages
const Stack = createNativeStackNavigator();

// This is the function that is going to list all our screens
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
    <Stack.Navigator name='HomeScreen' initialRouteName={HomeScreen}>
        {/* <Stack.Screen name='UserNavbar' component={UserNavbar} options={{ headerShown: false}}/> */}
        <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorVerification' component={DoctorVerification} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='UserVerification' component={UserVerification} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A',}}/>
        <Stack.Screen name='TriggerScreen' component={TriggerScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2',}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='ReportScreen' component={ReportScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='ScreenTimeScreen' component={ScreenTimeScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        {/* <Stack.Screen name='QRScreen' component={QRScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/> */}
        <Stack.Screen name='ChatScreen' component={ChatScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='LogScreen' component={LogScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='EditScreen' component={EditScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorChat' component={DoctorChat} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>

        <Stack.Screen name='DoctorNavbar' component={DoctorNavbar} options={{ headerShown: false }}/>
        <Stack.Screen name='DoctorHome' component={DoctorHome} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='Patient' component={Patient} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorProfile' component={DoctorProfile} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorEdit' component={DoctorEdit} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorChatScreen' component={DoctorChatScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='AddPatient' component={AddPatient} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        <Stack.Screen name='DoctorContacts' component={DoctorContacts} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
        </Stack.Navigator>
      </NavigationContainer>

      // Doctor Flow
      // <NavigationContainer>
      //       <Stack.Navigator name='DoctorHome' initialRouteName={DoctorHome}>
      //       <Stack.Screen name='DoctorNavbar' component={DoctorNavbar} options={{ headerShown: false }}/>
      //       <Stack.Screen name='DoctorVerification' component={DoctorVerification} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='DoctorHome' component={DoctorHome} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='Patient' component={Patient} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='DoctorProfile' component={DoctorProfile} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='DoctorEdit' component={DoctorEdit} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='DoctorChatScreen' component={DoctorChatScreen} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='AddPatient' component={AddPatient} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       <Stack.Screen name='DoctorContacts' component={DoctorContacts} options={{ headerStyle: {backgroundColor: '#f2f2f2'}, headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'}, headerTintColor: '#DC989A', headerShadowVisible: false}}/>
      //       </Stack.Navigator>
      // </NavigationContainer>
      );
}

export default App;
