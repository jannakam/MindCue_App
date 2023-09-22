import { SafeAreaView, View, Text, Button, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function DoctorEdit({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.generalBox}>
            <Text style={style.triggersTitle}>Mohammad's Profile</Text>
            <View style={style.generalBox2}>
                <Text style={style.generalText}>Name</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='Mohammad Jassim'></TextInput>
                <Text style={style.generalText}>Email</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='Mohammad@hotmail.com'></TextInput>
                <Text style={style.generalText}>Phone</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='60420309'></TextInput>
                <Text style={style.generalText}>Password</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='*********'></TextInput>
                <Text style={style.generalText}>Clinic Information</Text>
                <Text style={style.generalText}>Phone Number</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='66551199'></TextInput>
                <Text style={style.generalText}>Address</Text>
                <TextInput style={style.userEditInput} activeUnderlineColor='#DC989A' underlineColor='transparent' placeholder='Mother'></TextInput>
            </View>
            </View>
        </SafeAreaView>
        );
}

export default DoctorEdit;