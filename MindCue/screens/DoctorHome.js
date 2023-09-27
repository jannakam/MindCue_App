import React from 'react';
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DoctorHome({ navigation }) {
    return (
        <SafeAreaView>
            <ImageBackground style={style.userCircle} source={require('../assets/images/Ellipse15.png')}/>
            <Text style={style.userGreet}>Hello User!</Text>
            <Text style={style.userGreet2}>Hope you feel great today</Text>
            <View style={style.dashboard}>
                <Text style={style.dashboardTitle}>Patients List</Text>
                <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('Patient')}>Latifah Aldhaferi</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183, top: 4}} onPress={() => navigation.navigate('Patient')}/>
                </View>
                <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('Patient')}>Khalid Abdullah</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183, top: 4}} onPress={() => navigation.navigate('Patient')}/>
                </View>
                <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('Patient')}>Janna Almuqaisib</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183, top: 4}} onPress={() => navigation.navigate('Patient')}/>
                </View>
            </View>
        </SafeAreaView>
    );
  }

  export default DoctorHome;