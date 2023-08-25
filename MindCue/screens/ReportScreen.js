import { SafeAreaView, View, Text, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function ReportScreen({ navigation }) {
    const [checked, setChecked] = React.useState('first');
    return (
        <SafeAreaView>
            <View style={style.generalBox}>
                <Text style={style.triggersTitle}>Report Generator</Text>
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Weekly' status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
                <Text>Weekly</Text>
                </View>
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Bimonthly' status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
                <Text>Bimonthly</Text>
                </View >
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Monthly' status={checked === 'third' ? 'checked' : 'unchecked'} onPress={() => setChecked('third')} />
                <Text>Monthly</Text>
                </View>
                <Button style={style.button1} title='Download Report'/>
            </View>
        </SafeAreaView>
        );
}

export default ReportScreen;