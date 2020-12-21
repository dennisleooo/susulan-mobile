import React, { useEffect, useState } from 'react';
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
// import {
//     Header,
//     Left,
//     Right,
//     Thumbnail,
//     Icon
// } from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'

const urlAlternatif = 'https://images.unsplash.com/photo-1600271644420-f2a77271b6f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'

const HomeScreen = (props) => {
    const Auth = useSelector(state=>state.Auth)
    const dispatch = useDispatch()
    const [dataCat, setDataCat] = useState([])
    const [username, setUserName] = useState('')

    useEffect(()=>{
        Axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc')
        .then((res)=>{
            setDataCat(res.data)
            console.log(res.data[0].id)
            console.log(res)
            console.log('aaa')
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    // console.log(dataCat)

    const onToDetailsPress=(item)=>{
        console.log(item)
        props.navigation.navigate('Details', {data: item})
    }

    // const getData = () => {
    //     Axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc')
    //     .then((res)=>{
    //         setDataCat(res.data)
    //         console.log(res.data[0].id)
    //         console.log(res)
    //         console.log('aaa')
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }

   
    const renderCat=()=>{
        return dataCat.map((val, index)=>{
            return (
                <View key={index} style={{flexBasis:'50%', padding:5}}>
                    <TouchableWithoutFeedback onPress={()=>onToDetailsPress(val)}>
                        <Image source={{uri:val.url ? val.url : urlAlternatif }} style={{height:180, width:'100%'}}/>
                    </TouchableWithoutFeedback>
                </View>
            )
        })
    }


    return ( 
        <View style={{flex:1}}>
            <StatusBar barStyle={'light-content'}/>
            <ScrollView>
                {/* <Text>adad</Text>
                <Button title='click' onPress={getData}/> */}
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {renderCat()}
                </View>
            </ScrollView>
        </View>
     );
}
 
export default HomeScreen;