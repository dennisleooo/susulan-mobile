import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Icon} from 'react-native-elements'
import {Text} from 'react-native'
import LogoutScreen from '../screen/LogoutScreen'
import ProfileScreen from '../screen/ProfileScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
          initialRouteName = 'Profile'
          drawerPosition = 'right'
          drawerType = 'slide'
          screenOptions={({route})=>({
              // drawerIcon:({focused, color, size})=>{
              //     let iconName
              //     if(route.name === 'Profile') {
              //     iconName = focused ? 'user' : 'user'
              //     }else if(route.name === 'Setting') {
              //     iconName = focused ? 'cog' : 'cog'
              //     }
              //     // You can retrun any component that you like here!
              //     return <Icon name = {iconName} type='font-awesome' size={size} color={color}/>
              // },
              drawerLabel:({focused, color, size})=>{
                  return <Text style={{color}}>{route.name}</Text>
              }
            })}

            drawerContentOptions={{
                activeTintColor: '#3DDC84',
                inactiveTintColor: 'gray'
            }}
      >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}