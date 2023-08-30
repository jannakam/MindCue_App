import React from 'react';
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            {/* <ImageBackground source={'../assets/images/Ellipse15'}/> */}
            <View style={style.dashboard}>
                <Text style={style.dashboardTitle}>DashBoard</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('TriggerScreen')}>List of triggers</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('ReportScreen')}>Report</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('ScreenTimeScreen')}>Set screen time</Text>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('QRScreen')}>QR code</Text>
            </View>
        </SafeAreaView>
    );
  }

  export default HomeScreen;