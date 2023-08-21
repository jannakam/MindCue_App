import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';


// import the screens so we can link them to the navbar icons
import HomeScreen from '../screens/HomeScreen';

// create variables for each tab in the navbar
const homePage = 'Home';
const logsPage = 'Logs';
const chatPage = 'Chats';
const profilePage = 'Profile';

// create the navbar using this imported method
const Tab = createBottomTabNavigator();

// this is where we add our screens to the navbar
function UserNavbar() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} options ={{
                    tabBarIcon: ({ color, size }) => (<Icon name='home' color={DC989A} size={20}/>
                    ),
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
      );
}

export default UserNavbar;