import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {
    const [isusernamefilled, setisusernamefilled] = useState(false)
    const [ispasswordfilled, setispasswordfilled] = useState(false)
    const [secure, setsecure] = useState(true)
    const [flexView, setFlexView] = useState(2)
    const [datauser, setdatauser] = useState({
      username: '',
      password:''
    })
    const Auth = useSelector(state=>state.Auth)
    const dispatch = useDispatch()

    const _keyboardDidShow=()=>{
        setFlexView(5)
    }

    const _keyboardDidHide=()=>{
        setFlexView(2)
    }

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);
    
  
    const onInputChangeText=(text)=>{
      if(text){
        setisusernamefilled(true)
      }else{
        setisusernamefilled(false)
      }
      setdatauser({...datauser, username:text})
    }
  
    const onPasswordChangeText=(text)=>{
      if(text){
        setispasswordfilled(true)
      }else{
        setispasswordfilled(false)
      }
      setdatauser({...datauser, password:text})
    }

    
    
    const onLoginPress=()=>{
        AsyncStorage.setItem('username', datauser.username)
        .then(val=>{
            dispatch({type:'LOGIN', payload: datauser.username})
        }).catch(err=>{
            console.log(err)
        })
    }
  
    return (
      // <>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{flex:1}}>
                    <StatusBar backgroundColor='#3DDC84' barStyle="light-content" />
                    <View style={{flex:Platform.OS=='ios'?2:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon
                            name='android'
                            type='FontAwesome'
                            color='#3DDC84'
                            size={250}
                        />
                         <Input
                                value={datauser.username}
                                placeholder={'Username'}
                                placeholderTextColor={isusernamefilled?'#FF8E53':'gray'}
                                leftIcon={{type:'font-awesome', name:'user', color:isusernamefilled?'#FF8E53':'gray'}}
                                inputContainerStyle={{borderColor:isusernamefilled?'#FF8E53':'gray'}}
                                inputStyle={{color:'#3DDC84'}}
                                labelStyle={{color:isusernamefilled?'#FF8E53':'gray'}}
                                onChangeText={onInputChangeText}
                            />
                            <Button
                                style={{
                                    paddingVertical:5,
                                    backgroundColor:'#3DDC84'
                                }}
                                title='Log In'
                                onPress={onLoginPress}
                            />
                    </View>
            </View>
      </TouchableWithoutFeedback>
    );
  };
  
  const styles = StyleSheet.create({
    containerStyle:{
      backgroundColor:'white', 
      borderTopRightRadius:30, 
      borderTopLeftRadius:30,
      paddingHorizontal:20,
      justifyContent:'center'  
    }
    
  });
  
  export default LoginScreen;