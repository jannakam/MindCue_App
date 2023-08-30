import React from 'react';
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserNavbar from '../components/UserNavbar';
import style from '../components/style';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            {/* <ImageBackground source={'../assets/images/Ellipse15'}/> */}
            <View style={style.dashboard}>
                <Text style={style.dashboardTitle}>DashBoard</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('List of triggers')}>List of triggers</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('Report')}>Report</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('Set Screen Time')}>Set screen time</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('QR Code')}>QR code</Text>
            </View>
        </SafeAreaView>
    );
  }

  export default HomeScreen;