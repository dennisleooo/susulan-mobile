import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStackRoot from './HomeStack'
import LogoutScreen from './../screen/LogoutScreen'
import ProfileDrawer from './ProfileDrawer'
import {Icon} from 'react-native-elements'

const Tab = createBottomTabNavigator()

const TabRoot = () => {
    return ( 
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    let iconName, type
                    if(route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person'
                        type = 'MaterialIcons'
                        size = 35
                    }else{
                        iconName = focused ? 'home' : 'home'
                        type = 'Entypo'
                        size = 35
                    }
                    return <Icon name={iconName} type={type} size={size} color={color}/>
                },
                tabBarLabel: () => null
            })}

            tabBarOptions={{
                inactiveTintColor:'lightgray',
                activeTintColor:'#3DDC84',
            }}
        >
            <Tab.Screen name='HomeStackRoot' component={HomeStackRoot}/>
            <Tab.Screen name='Profile' component={ProfileDrawer}/>
        </Tab.Navigator>
    );
}
 
export default TabRoot;