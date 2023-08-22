import { SafeAreaView, View, Text } from 'react-native';
import * as React from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function TriggerScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.triggers}>
                <Text style={style.triggersTitle}>Triggers List</Text>
                <Checkbox label='War' status='checked' onPress={null}/>
    
            </View>
        </SafeAreaView>
        );
}

export default TriggerScreen;