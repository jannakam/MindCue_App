import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';


// import the screens so we can link them to the navbar icons
import DoctorHome from '../screens/DoctorHome';
import DoctorProfile from '../screens/DoctorProfile';
import DoctorContacts from '../screens/DoctorContacts';

// create variables for each tab in the navbar
const DH = 'Home';
const DP = 'Profile';
const DC = 'Contacts'

// create the navbar using this imported method
const Tab = createBottomTabNavigator();

// this is where we add our screens to the navbar
function UserNavbar() {
    return (
            <Tab.Navigator initialRouteName={DoctorHome}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === DH) {
                  iconName = focused ? 'home' : 'home';
    
                } else if (rn === DP) {
                  iconName = focused ? 'account' : 'account';
                
                } else if (rn === DC) {
                  iconName = focused ? 'chat' : 'chat';
                }

                // } else if (rn === profilePage) {
                //     iconName = focused ? 'account' : 'account';
                //   }
    
                // You can return any component that you like here!
                return <Icon name={iconName} size={35} color={'#DC989A'} selectionColor={'#638184'}/>;
              },
            })}>

                <Tab.Screen name={DH} component={DoctorHome} />
                <Tab.Screen name={DC} component={DoctorContacts} />
                <Tab.Screen name={DP} component={DoctorProfile} />

            </Tab.Navigator>
      );
}

export default UserNavbar;