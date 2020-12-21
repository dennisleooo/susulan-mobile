import React from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    StatusBar,
    Image
} from 'react-native'
// import {
//     Header,
//     Left,
//     Right,
//     Thumbnail,
//     Icon
// } from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-native-elements'

const DetailScreen = ({navigation, route}) => {
    const {cat} = route.params.data

    const setDisplayPicture=()=>{
        dispatch({type:'SETPICTURE', payload: cat.url})
    }


    return ( 
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={cat.url} style={{height:180, width:'100%'}}/>
            <Button
                style={{
                    paddingVertical:5,
                    backgroundColor:'#3DDC84'
                }}
                title='Set Display Picture'
                onPress={setDisplayPicture}
            />
        </View>
     );
}
 
export default DetailScreen;