import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';


// import the screens so we can link them to the navbar icons
import HomeScreen from '../screens/HomeScreen';
import LogScreen from '../screens/LogScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
            <Tab.Navigator initialRouteName={homePage}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === homePage) {
                  iconName = focused ? 'home' : 'home';
    
                } else if (rn === chatPage) {
                  iconName = focused ? 'chat' : 'chat';
    
                } else if (rn === logsPage) {
                  iconName = focused ? 'history' : 'history';

                } else if (rn === profilePage) {
                    iconName = focused ? 'account' : 'account';
                  }
    
                // You can return any component that you like here!
                return <Icon name={iconName} size={35} color={'#DC989A'} />;
              },
            })}>

                <Tab.Screen name={homePage} component={HomeScreen} />
                <Tab.Screen name={chatPage} component={ChatScreen} />
                <Tab.Screen name={logsPage} component={LogScreen} />
                <Tab.Screen name={profilePage} component={ProfileScreen} />

            </Tab.Navigator>
      );
}

export default UserNavbar;