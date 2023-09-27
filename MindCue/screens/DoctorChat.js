import { SafeAreaView, View, Text, Image, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocumentPicker from 'react-native-document-picker';
import style from '../components/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DoctorChat () {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef(null);
    const [singleFile, setSingleFile] = useState(null);

    const handleSend = () => {
        if (inputText.trim() === '') {
            return;
        }

    // Assuming you have a user object with a unique ID
    const user = { id: 1, name: 'Latifah' };

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    // Scroll to the latest message
    flatListRef.current.scrollToEnd();};

    const uploadImage = async () => {
      // Check if any file is selected or not
      if (singleFile != null) {
        // If file selected then create FormData
        const fileToUpload = singleFile;
        const data = new FormData();
        data.append('name', 'Image Upload');
        data.append('file_attachment', fileToUpload);
        // Please change file upload URL
        let res = await fetch(
          'http://localhost/upload.php',
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          alert('Upload Successful');
        }
      } else {
        // If no file selected the show alert
        alert('Please Select File first');
      }
    };
  
    const selectFile = async () => {
      // Opening Document Picker to select one file
      try {
        const res = await DocumentPicker.pick({
          // Provide which type of file you want user to pick
          type: [DocumentPicker.types.allFiles],
          // There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setSingleFile(res);
      } catch (err) {
        setSingleFile(null);
        // Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
          // If user canceled the document selection
          alert('Canceled');
        } else {
          // For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View
                style={{
                padding: 8,
                backgroundColor: item.user.id === 1 ? '#D2E5E7' : '#FFF',
                alignSelf: item.user.id === 1 ? 'flex-end' : 'flex-start',
                margin: 4,
                color: '#638184',
                borderRadius: 8,
                maxWidth: '70%',
                }}>
            <Text style={{color: '#638184'}}>{`${item.user.name} (${item.timestamp}):`}</Text>
            <Text style={{color: '#638184'}}>{item.text}</Text>
          </View>
        )}/>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, gap: 10}}>
        <TextInput
          style={{ flex: 1, padding: 8 }}
          placeholder="Type your message..."
          placeholderTextColor={'#638184'}
          color={'#638184'}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        {/*Showing the data of selected Single file*/}
        {singleFile != null ? (
        <Text style={{color:'#638184'}}>
          {singleFile.name}
        </Text>
      ) : null}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={selectFile}>
        <Icon name='file-upload' size={20} color={'#DC989A'}/>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Icon name='upload' size={20} color={'#DC989A'}/>
      </TouchableOpacity>
        <Icon name="send" size={20} color={'#DC989A'} onPress={handleSend} />
        </View>
        </View>
    );
}

export default DoctorChat