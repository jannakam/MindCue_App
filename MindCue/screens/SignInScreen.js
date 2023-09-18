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
          <ImageBackground style={style.bgGraphic2} source={require('../assets/images/Ellipse7.png')}/>
          <ImageBackground style={style.bgGraphic3} source={require('../assets/images/Rectangle1.png')}/>
          <ImageBackground source={require('../assets/images/Ellipse2.png')} style={style.bgImage}/>
          <ImageBackground style={style.bgGraphic4} source={require('../assets/images/Rectangle2.png')}/>
          <ImageBackground style={style.bgGraphic1} source={require('../assets/images/Ellipse5.png')}/>
          <ImageBackground style={style.bgGraphic5} source={require('../assets/images/Ellipse6.png')}/>
          <ImageBackground style={style.bgGraphic6} source={require('../assets/images/Ellipse8.png')}/>

          <Text style={style.signInTitle}>Sign In</Text>
          <View style={style.box1}>
            <TextInput style={style.textbox} placeholder='Email' />
            <TextInput style={style.textbox} placeholder='Password' />
            <Text style={style.button1} onPress={() => navigation.navigate('HomeScreen')}>Sign in</Text>
          </View>
            <Text style={style.signInText} >Forgot Password?</Text>
            <Text style={style.signInText} onPress={() => navigation.navigate('SignUpScreen')}>New? Create account</Text>
          </View>
        </SafeAreaView>
        );
}

export default SignInScreen;