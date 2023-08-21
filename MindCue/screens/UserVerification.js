import React from 'react';
import { Text, View, SafeAreaView, Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';


// The page that allows the user to use a pin code to verify the account creation
function UserVerification({ navigation }) {
    const [number, setNumber] = React.useState('');
    // This function limits the user to using only numbers
    function onChanged(text) {
      let newText = '';
      let numbers = '0123456789';
  
      for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
          else {
              alert("Please enter numbers only");
          }
      }
      setNumber(newText);
  }
    return (
      <SafeAreaView>
        <View style={style.box2}>
          <Text style={style.userTitle}>Hello User!</Text>
          <Text style={style.generalText}>Please enter verification code</Text>
          <TextInput style={style.numberInput} keyboardType='numeric' onChangeText={text => onChanged(text)} value={number} maxLength={4} />
          <Button style={style.button1} title='Submit' onPress={() => navigation.navigate('Home Screen')}/>
        </View>
      </SafeAreaView>
    );
  }

  export default UserVerification;