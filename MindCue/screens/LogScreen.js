import { SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';
import style from '../components/style';

function LogScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
            <View>
                <Searchbar iconColor='#DC989A' placeholderTextColor={'#DC989A'} style={style.search} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
                <Text style={style.recentActivity}>Recent Activity</Text>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Link</Text>
                </View>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Link</Text>
                </View>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Link</Text>
                </View>
                <Text style={style.seeMore}>See More</Text>

                <Text style={style.recentActivity}>Recent Warnings</Text>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Warning Type</Text>
                </View>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Warning Type</Text>
                </View>
                <View style={style.logsContainer}>
                <Text style={style.titleStyle}>Site Title</Text>
                <Text style={style.linkStyle}>Warning Type</Text>
                </View>
                <Text style={style.seeMore}>See More</Text>
            </View>
        </SafeAreaView>
        );
}

export default LogScreen;