import React, { useState, useEffect, useRef } from 'react';
import {Text, View, SafeAreaView, ImageBackground, Button,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, RadioButton, TextInput } from 'react-native-paper';
import {Camera , useCameraDevices} from 'react-native-vision-camera'
import { camelCase } from 'react-native-svg/lib/typescript/xml';
import style from '../components/style';


function ScanQrCode() {
  //const [isSignedIn, setIsSignedIn] = useState(false);
  const devices = Camera.getAvailableCameraDevices()
  const device = devices.find((d) => d.position === 'back')
  const camera = useRef(null)
  const [imageData, setImageData] = useState('')
  const [takePhotoClicked,setTakePhotoClicked ]=useState(false)
  useEffect(()=>{
    checkPeermission()
  },[])
  const checkPeermission =async()=>{
    const newcameraPermission = await Camera.requestCameraPermission()
    const newmicrophonePermission = await Camera.requestMicrophonePermission()
    console.log(newcameraPermission)
  }
  if (device == null) return <ActivityIndicator />
 const takePicture = async()=>{
  if(camera!=null){
    const photo = await camera.current.takePhoto()
    setImageData(photo.path)
    setTakePhotoClicked(false)
console.log(photo.path)
  }
 }
  return (
      <View style={{flex:1}}>
      <View style={{flex:1}}>
        <Camera
      ref={camera}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      photo
    />
    <TouchableOpacity style={{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'pink',
    position:'absolute',
    bottom:50,
    alignSelf:'center'
  }}onPress={()=>{
  takePicture()
  setTakePhotoClicked(true)
  }}>
    </TouchableOpacity>

</View>
 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
{imageData !=='' && <Image source={{uri:'file://'+imageData}} style={{width:'90%',height:200}} /> }
</View> 
</View>
 );
}

export default ScanQrCode;
