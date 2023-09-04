import { SafeAreaView, View, Text, Button, ImageBackground} from 'react-native';
import { RadioButton } from 'react-native-paper';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function EditScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.generalBox}>
                <Text>Latifah's Profile</Text>
                <Text>Name</Text>
                <Text>Email</Text>
                <Text>Phone</Text>
                <Text>Password</Text>
                <Text>Emergency COntact Information</Text>
                <Text>Name</Text>
                <Text>Phone Number</Text>
                <Text>Relationship</Text>
            </View>
        </SafeAreaView>
        );
}

export default EditScreen;