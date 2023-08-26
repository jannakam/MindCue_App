import { SafeAreaView, View, Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRCode from 'react-native-qrcode-svg';
import style from '../components/style';

function QRScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.QRContainer}>
                <Text style={style.triggersTitle}>Scan the Code</Text>
                <QRCode
                size={200}
                />
            </View>
        </SafeAreaView>
        );
}

export default QRScreen;