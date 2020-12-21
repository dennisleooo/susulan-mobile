import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TabRoot from './TabRoot'
import ProfileDrawer from './ProfileDrawer'

const Stack = createStackNavigator()

const StackRoot = () => {
    return ( 
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='TabRoot' component={TabRoot}/>
            <Stack.Screen name='ProfileDrawer' component={ProfileDrawer}/>
        </Stack.Navigator>
    );
}
 
export default StackRoot;