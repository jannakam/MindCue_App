import React, { useState, useEffect, useRef } from 'react';
import {Text, View, SafeAreaView, ImageBackground, Button,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, RadioButton, TextInput } from 'react-native-paper';
import {Camera,useCameraDevices} from 'react-native-vision-camera';
import style from '../components/style';

function ScanQrCode() {
  // const devices = Camera.getAvailableCameraDevices();
  const devices = Camera.useCameraDevices();
  const device = devices.find((d) => d.position === 'back');
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked,setTakePhotoClicked] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission = await Camera.requestMicrophonePermission();
      console.log(newCameraPermission);
    };
    checkPermission();
  }, []);

  if (device == null) return <ActivityIndicator />;

  const takePicture = async () => {
    if(camera.current != null){
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      setTakePhotoClicked(false);
      console.log(photo.path);
    }
  };

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
        <TouchableOpacity
          style={{
            width:60,
            height:60,
            borderRadius:30,
            backgroundColor:'pink',
            position:'absolute',
            bottom:50,
            alignSelf:'center'
          }}
          onPress={() => {
            takePicture();
            setTakePhotoClicked(true);}}
          />
          </View>
          </View>
  );
  }

  export default ScanQrCode;