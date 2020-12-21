import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    StatusBar,
    Image
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

const foto = require('./../asset/blank-profile.png')

const ProfileScreen = () => {
    const Auth = useSelector(state=>state.Auth)
    // console.log(Auth)

    return ( 
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={Auth.foto ? Auth.foto : foto} style={{height:180, width:150, height:150, borderRadius:75}}/>
            <Text style={{color:'black', fontSize:20}}>Hallo {Auth.username}</Text>
        </View>
     );
}
 
export default ProfileScreen;