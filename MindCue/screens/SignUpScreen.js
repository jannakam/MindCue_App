import React from 'react';
import { Text, View, SafeAreaView, Button} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';


// This is the screen where the user registers a new account
function SignUpScreen({ navigation }) {
    const [checked, setChecked] = React.useState('first');
    return(
    <SafeAreaView>
    <View>
      <Text style={style.registerTitle}>Create Account</Text>
      <View style={style.box2}>
      <TextInput style={style.textbox} placeholder='Name'></TextInput>
      <TextInput style={style.textbox} placeholder='Email Address'></TextInput>
      <TextInput style={style.textbox} placeholder='Password'></TextInput>
      <TextInput style={style.textbox} placeholder='Confirm Password'></TextInput>
      <Text style={style.signInText}>What kind of user are you?</Text>
      <View style={style.box3}>
      <View style={style.userTypeContainer}>
      <RadioButton color='#DC989A' uncheckedColor= '#638184' value='I am a patient with a doctor' status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
      <Text>I am a patient with a doctor</Text>
      </View>
      <View style={style.userTypeContainer}>
      <RadioButton color='#DC989A' uncheckedColor= '#638184' value='I do not currently see a doctor' status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
      <Text>I do not currently see a doctor</Text>
      </View>
      <View style={style.userTypeContainer}>
      <RadioButton color='#DC989A' uncheckedColor= '#638184' value='I am a licensed mental health professional' status={checked === 'third' ? 'checked' : 'unchecked'} onPress={() => setChecked('third')} />
      <Text>I am a licensed mental health professional</Text>
      </View>
      </View>
      <Button style={style.button1} title='Sign Up' onPress={() => navigation.navigate('User Verification')} />
      </View>
    </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;