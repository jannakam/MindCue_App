import { SafeAreaView, StyleSheet, View, Button, Text, Dimensions, StatusBar, TouchableOpacity, Platform} from 'react-native';
import { TimerPicker } from "react-native-timer-picker";
import React from 'react';
import BackgroundTimer from "react-native-background-timer"
import CountDown from 'react-native-countdown-component';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from "react";
import UserNavbar from '../components/UserNavbar';
import style from '../components/style';


function ScreenTimeScreen ({ navigation }) {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate;
//     setShow(false);
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   // const showDatepicker = () => {
//   //   showMode('date');
//   // };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   const formatDate = (date, time) => {
//     return `${date.getDate()}/${date.getMonth() +
//       1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
//   };

//   return (
//     <SafeAreaView>
//       {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
//       <Button onPress={showTimepicker} title="Show time picker!" />
//       <Text>{date.toLocaleString()}</Text>
//       <TouchableOpacity onPress={showTimepicker}>
//           <Text>{formatDate(date, time)}</Text>
//       </TouchableOpacity>
      
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display='default'
//           onChange={onChange}
//         />
//       )}
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// };

//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedValue) => {
//     setShow(Platform.OS === 'ios');
//     if (mode == 'date') {
//       const currentDate = selectedValue || new Date();
//       setDate(currentDate);
//       setMode('time');
//       setShow(Platform.OS !== 'ios');
//     } else {
//       const selectedTime = selectedValue || new Date();
//       setTime(selectedTime);
//       setShow(Platform.OS === 'ios');
//       //setMode('date');
//     }
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('time');
//   };

  
//   return (
//     <View>
//     <View style={style.timerContainer}>
//       <Text style={style.triggersTitle}>Set Time Limit</Text>
//       <TouchableOpacity onPress={showDatepicker}>
//         <Text style={style.timerStyle}>{formatDate(time)}</Text>
//       </TouchableOpacity>
//       </View>

//       <View style={style.timerContainer}>
//       <Text style={style.triggersTitle}>Set Break Limit</Text>
//       <TouchableOpacity onPress={showDatepicker}>
//         <Text style={style.timerStyle}>{formatDate(time)}</Text>
//       </TouchableOpacity>
//       </View>

//       {show && (
//         <DateTimePicker
//           testID='dateTimePicker'
//           //timeZoneOffsetInMinutes={0}
//           value={date}
//           mode={mode}
//           is24Hour={false}
//           display='default'
//           onChange={onChange}
//         />
//       )}
//       </View>
//   );
// };

// const formatDate = (time) => {
//   return `${time.getHours()}:${time.getMinutes()}`;
// };
    return (
        <SafeAreaView>
            <View></View>
        </SafeAreaView>
    );
}

export default ScreenTimeScreen;