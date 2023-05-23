import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre/index'
import Contato from '../pages/Contato/index'

import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();
//aqui só fica a configuração da Tab
export default function Routes(){
  return(
    <Tab.Navigator
       screenOptions={{
        headerShown: false, //desabilitando o header
        tabBarHideOnKeyboard: true, //
        tabBarShowLabel: false, //apenas exibir o ícone
        tabBarActiveTintColor: '#FFF', //se ícone ativo

        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0, //tirando a borda abaixo
        }
       }}
      >
        <Tab.Screen 
         name="HomeStack" 
         component={StackRoutes}
         options={{
          //tabBarLabel: 'INICIO',
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size}/>
          }
         }}
        />
        <Tab.Screen 
         name="Sobre" 
         component={Sobre} 
         options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file-text" color={color} size={size}/>
          }
         }}
        />
        <Tab.Screen
         name="Contato" 
         component={Contato} 
         options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="phone-call" color={color} size={size}/>
          }
         }}
         />
    </Tab.Navigator>
  )
}

/*
  <Drawer.Navigator>
    <Drawer.Screen
      name="HomeStack"
      component={StackRoutes}
    />
    <Drawer.Screen
      name="Sobre"
      component={Sobre}
    />
    <Drawer.Screen
      name="Contato"
      component={Contato}
    />
  </Drawer.Navigator>
*/