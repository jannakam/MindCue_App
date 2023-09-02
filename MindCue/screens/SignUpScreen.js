import React from 'react';
import { Text, View, SafeAreaView, Button, ImageBackground, Pressable} from 'react-native';
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
    <ImageBackground style={style.bgGraphic9} source={require('../assets/images/Ellipse10.png')}/>
    <ImageBackground source={require('../assets/images/Rectangle23.png')} style={style.bgImage2}/>
    <ImageBackground source={require('../assets/images/Ellipse5.png')} style={style.bgGraphic7}/>
    <ImageBackground style={style.bgGraphic8} source={require('../assets/images/Ellipse7.png')}/>
    <ImageBackground style={style.bgGraphic10} source={require('../assets/images/Ellipse8.png')}/>
      <Text style={style.registerTitle}>Create Account</Text>
      <View style={style.box2}>
      <TextInput style={style.textbox} placeholder='Name'></TextInput>
      <TextInput style={style.textbox} placeholder='Email Address'></TextInput>
      <TextInput style={style.textbox} placeholder='Password'></TextInput>
      <TextInput style={style.textbox} placeholder='Confirm Password'></TextInput>
      <Text style={style.userQues}>What kind of user are you?</Text>
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
      <Text style={style.button2} onPress={() => navigation.navigate('UserVerification')}>Sign up</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;