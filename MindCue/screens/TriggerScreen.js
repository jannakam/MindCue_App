import { SafeAreaView, View, Text, TouchableOpacity, Button, FlatList} from 'react-native';
import * as React from 'react';
import { Checkbox, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../components/style';

function AddWordsItem(props) {
const [inputWords, setWords] = React.useState('');
const ClickedAddWords = () => {
    props.wordsToAdd(inputWords)
    setWords('')
    }
    return (
        <><Text style={style.triggersTitle}>Keywords List</Text><TouchableOpacity onPress={ClickedAddWords}>
            <Text>Add Triggers:</Text>
        </TouchableOpacity><TextInput placeholder='ex: Guns' onChangeText={(result) => setWords(result)} value={inputWords}></TextInput></>
);
}

function TriggerScreen({ navigation }) {
    const [war, setWar] = React.useState(false);
    const [childAbuse, setChildAbuse] = React.useState(false);
    const [gore, setGore] = React.useState(false);
    const [death, setDeath] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
        
    const [keyword, setKeyword] = React.useState("")
    const [keywordArray, setKeywordArray] = React.useState([])

    const onSubmitPress = () => {
        var keywordObject = {
            id: new Date(),
            title: keyword,
            details: 'demo detail'
        }

        setKeywordArray([...keywordArray, keywordObject])
    }

    const onSubmitAddToList = () => {
        var keywordData = {
            id: new Date(),
            title: keyword,
            detail: 'keyword details'
        }
        setKeywordArray([...keywordArray, keywordData])
    }

    const renderItemList = () => {
        <View>
            <Text style={{color: 'white', fontSize: 24}}>title</Text>
            <Text>X</Text>
        </View>
    }

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
                {/* <SearchBar placeholder='Search for a trigger' onChangeText={onChangeSearch} value={searchQuery}/> */}
            </View>
            <View style={style.keywords}>
                <TextInput placeholder='Add a keyword trigger' keyboardType='default' onChangeText={value=> (
                   setKeyword(value) 
                )} />

                <TouchableOpacity onPress={() => onSubmitAddToList()}>
                    <Text>Add</Text>
                </TouchableOpacity>

                <FlatList data={keywordArray} 
                renderItem={renderItemList} 
                keyExtractor={item => item.id}
                />

            </View>
        </SafeAreaView>
        );

    }


export default TriggerScreen;