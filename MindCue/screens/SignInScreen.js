import React from 'react';
import { Text, View, SafeAreaView, Button, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';


// This is the screen where the user signs in
function SignInScreen({ navigation }) {
    return (
        <SafeAreaView>
          <View>
          <ImageBackground source={require('../assets/images/Ellipse2.png')} style={style.bgImage}/>
          <Text style={style.signInTitle}>Sign In</Text>
          <View style={style.box1}>
            <TextInput style={style.textbox} placeholder='Email' />
            <TextInput style={style.textbox} placeholder='Password' />
            <Button style={style.button1} title='Sign In' />
            <Text style={style.signInText} >Forgot Password?</Text>
            <Text style={style.signInText} onPress={() => navigation.navigate('SignUpScreen')}>New? Create account</Text>
          </View>
          </View>
        </SafeAreaView>
        );
}

export default SignInScreen;