import { SafeAreaView, View, Text, Image, ImageProps, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.profileContainer1}>
                <Image source={require('../assets/images/User4.png')}></Image>
               <Text style={style.userName}>Latifah Aldhaferi</Text>
               <Text style={style.userEmail}>Latifahaldhafirii@hotmail.com</Text>
               <Text style={style.userInfo}>User Info</Text>
               <View style={style.profileContainer2}>
               <Text style={style.userInfo}>Phone: <Text style={style.userECInfo}>604203309</Text></Text>
               <Text style={style.userInfo}>Emergency Contact Info</Text>
               <Text style={style.userInfo}>Name:</Text>
               <Text style={style.userECInfo}>Haifa</Text>
               <Text style={style.userInfo}>Phone:</Text>
               <Text style={style.userECInfo}>66551199</Text>
               <Text style={style.userInfo}>Relationship:</Text>
               <Text style={style.userECInfo}>Mother</Text>
               </View>
               <Text style={style.userEdit} onPress={() => navigation.navigate('EditScreen')}>Edit</Text>
            </View>
        </SafeAreaView>
        );
}

export default ProfileScreen;