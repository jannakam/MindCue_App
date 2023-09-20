import React from 'react';
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ImageBackground style={style.userCircle} source={require('../assets/images/Ellipse15.png')}/>
            <Text style={style.userGreet}>Hello User!</Text>
            <Text style={style.userGreet2}>Hope you feel great today</Text>
            <View style={style.dashboard}>
                <Text style={style.dashboardTitle}>Patients List</Text>
                <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('TriggerScreen')}>Latifah Aldhaferi</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183}} onPress={() => navigation.navigate('TriggerScreen')}/>
                </View>
                <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('ReportScreen')}>Khalid Abdullah</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183}} onPress={() => navigation.navigate('ReportScreen')}/>
                </View>
                <View>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('ScreenTimeScreen')}>Janna ALmuqaisib</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183}} onPress={() => navigation.navigate('ScreenTimeScreen')}/>
                </View>
            </View>
        </SafeAreaView>
    );
  }

  export default HomeScreen;