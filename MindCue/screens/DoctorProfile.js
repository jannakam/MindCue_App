import { SafeAreaView, View, Text, Image, ImageProps, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function DoctorProfile({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.profileContainer1}>
                <Image source={require('../assets/images/User4.png')}></Image>
               <Text style={style.userName}>Dr. Mohammad Jassim</Text>
               <Text style={style.userEmail}>Latifahaldhafirii@hotmail.com</Text>
               <Text style={style.userInfo}>Clinic Info</Text>
               <View style={style.profileContainer2}>
               <Text style={style.userInfo}>Phone:</Text>
               <Text style={style.userECInfo}>604203309</Text>
               <Text style={style.userInfo}>Address:</Text>
               <Text style={style.userECInfo}>Salmiya, Block 2 St 223 Bulding No. 127 1st Floor</Text>
               </View>
               <Text style={style.userEdit} onPress={() => navigation.navigate('DoctorEdit')}>Edit</Text>
            </View>
        </SafeAreaView>
        );
}

export default DoctorProfile;