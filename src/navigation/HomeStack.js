import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screen/Homescreen'
import DetailScreen from './../screen/DeatailScreen'

const Stack = createStackNavigator()

const HomeStackRoot = () => {
    return ( 
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailScreen}/>
        </Stack.Navigator>
    );
}
 
export default HomeStackRoot;
