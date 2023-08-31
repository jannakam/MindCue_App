import { SafeAreaView, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function ChatScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.headerContainer}>
                <Image style={style.doctorImage} source={require('../assets/images/doctor.jpg')} />
                <Text style={style.doctorTitle}>Dr. Mohammad</Text>
            </View>
        </SafeAreaView>
        );
}

export default ChatScreen;