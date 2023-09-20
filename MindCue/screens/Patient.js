import { SafeAreaView, View, Text, Image, ImageProps, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../components/style';

function Patient({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.profileContainer1}>
                <Image source={require('../assets/images/User5.png')}></Image>
               <Text style={style.userName}>Latifah Aldhaferi</Text>
               <Text style={style.generalText2}>Mobile</Text>
               <Text style={style.generalText}>60420309</Text>
               <Text style={style.generalText2}>Email</Text>
               <Text style={style.generalText}>Latifahaldhafirii@hotmail.com</Text>
               <Text style={style.button4}>Send a Chat</Text>
               <Text>Call Emergency Contact</Text>
               <View style={style.ECcontainer}>
               <Text>Name:</Text>
               <Text>Haifa</Text>
               </View>
               <View style={style.ECcontainer}>
               <Text>Phone:</Text>
               <Text>60420309</Text>
               </View>
               <View style={style.ECcontainer}>
               <Text>Relationship:</Text>
               <Text>Mother</Text>
               </View>
               </View>
        </SafeAreaView>
        );
}

export default Patient;