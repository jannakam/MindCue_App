import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserNavbar from '../components/UserNavbar';
import style from '../components/style';


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.dashboard}>
                <Text style={style.dashboardTitle}>DashBoard</Text>
                <Text style={style.dashboardOptions}>List of triggers</Text>
                <Text style={style.dashboardOptions}>Report</Text>
                <Text style={style.dashboardOptions}>Set screen time</Text>
                <Text style={style.dashboardOptions}>QR code</Text>
            </View>

        </SafeAreaView>
    );
  }

  export default HomeScreen;