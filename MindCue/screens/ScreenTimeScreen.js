import { SafeAreaView, StyleSheet, View, Text, Dimensions, StatusBar, TouchableOpacity, Platform} from 'react-native';
import { TimerPicker } from "react-native-timer-picker";
import React from 'react';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserNavbar from '../components/UserNavbar';
import style from '../components/style';


function ScreenTimeScreen () {
  const [showPicker, setShowPicker] = React.useState(false);
  const [alarmString, setAlarmString] = React.useState(null);
  return (
    <SafeAreaView>
      <View style={style.timerContainer}>
      <TimerPicker
            padWithNItems={2}
            hourLabel = ":"
            minuteLabel=":"
            secondLabel=""
            styles={{
              theme: "light",
              pickerItem: {
                  fontSize: 34,
              },
              pickerLabel: {
                  fontSize: 32,
                  marginTop: 0,
              },
              pickerContainer: {
                  marginRight: 6,
              },
          }}
        />
        </View>
    </SafeAreaView>
  );
}



export default ScreenTimeScreen;