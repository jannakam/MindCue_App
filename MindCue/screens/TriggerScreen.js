import { SafeAreaView, View, Text, TouchableOpacity, Button, FlatList} from 'react-native';
import * as React from 'react';
import { Checkbox, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../components/style';

function TriggerScreen({ navigation }) {
    const [war, setWar] = React.useState(false);
    const [childAbuse, setChildAbuse] = React.useState(false);
    const [gore, setGore] = React.useState(false);
    const [death, setDeath] = React.useState(false);

    const [inputText, setInputText] = React.useState('');
    const [list, setList] = React.useState([]);
      
    const handleAddItem = () => {
        if (inputText.trim() === '') {
            return;
        }
      
          setList([...list, inputText]);
          setInputText('');
        };
      
    const handleDeleteItem = (index) => {
    const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    const ListItem = ({ text, onDelete }) => {
        return (
          <View style={style.keywordContainer}>
            <Text style={{color: '#638184', fontFamily: 'Lexend-Regular', fontSize: 16,}}>{text}</Text>
            <TouchableOpacity onPress={onDelete}>
              <Icon name="remove" size={20} color="#DC989A" />
            </TouchableOpacity>
          </View>
        );
      };
      
    return (
        <SafeAreaView>
            <View style={style.generalBox}>
                <Text style={style.triggersTitle}>Triggers List</Text>
                <View style={style.checkboxContainer}>
                <Checkbox color='#DC989A' uncheckedColor='#638184' label='War' status={war ? 'checked' : 'unchecked'} onPress={() => {setWar(!war);}}/>
                <Text style={style.triggerOptions}>War</Text>
                </View>
                <View style={style.checkboxContainer}>
                <Checkbox color='#DC989A' uncheckedColor='#638184' label='Child Abuse' status={childAbuse ? 'checked' : 'unchecked'} onPress={() => {setChildAbuse(!childAbuse);}}/>
                <Text style={style.triggerOptions}>Child Abuse</Text>
                </View>
                <View style={style.checkboxContainer}>
                <Checkbox color='#DC989A' uncheckedColor='#638184' label='Gore' status={gore ? 'checked' : 'unchecked'} onPress={() => {setGore(!gore);}}/>
                <Text style={style.triggerOptions}>Gore</Text>
                </View>
                <View style={style.checkboxContainer}>
                <Checkbox color='#DC989A' uncheckedColor='#638184' label='Death' status={death ? 'checked' : 'unchecked'} onPress={() => {setDeath(!death);}}/>
                <Text style={style.triggerOptions}>Death</Text>
                </View>
            </View>
            <View style={style.keywords}>
            <Text style={style.triggersTitle}>Keywords List</Text>
            <FlatList
              data={list}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <ListItem text={item} onDelete={() => handleDeleteItem(index)} />
              )}
            />
            <TextInput
              style={style.keywordBox}
              placeholder="Add your own"
              placeholderTextColor={'#DC989A'}
              value={inputText}
              activeUnderlineColor='transparent' 
              underlineColor='transparent'
              onChangeText={(text) => setInputText(text)}
            />
            <Text style={style.addButton} onPress={handleAddItem}>Add</Text>
            
            </View>
        </SafeAreaView>
        );

    }


export default TriggerScreen;