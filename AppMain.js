import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useDispatch, useSelector} from 'react-redux'
import HomeScreen from './src/screen/Homescreen'
import LoginScreen from './src/screen/Loginscreen'
import TabRoot from './src/navigation/TabRoot'
import StackRoot from './src/navigation/StackRoot'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppMain = () => {
    const Auth = useSelector(state=>state.Auth)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        AsyncStorage.getItem('username')
        .then((val)=>{
            if (val !== null) {
                dispatch({type:'LOGIN', payload: val})
                setLoading(false)
            }
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    })

    return (
        <NavigationContainer>
            {
                Auth.isLogin ?
                <TabRoot/>
                // <StackRoot/>
                :
                <LoginScreen/>
            }
        </NavigationContainer>
    );
};



export default AppMain;
