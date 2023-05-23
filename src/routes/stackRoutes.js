import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//colocando navegação em pilha em Home
import Home from '../pages/Home/index'
import Detalhes from '../pages/Detalhes/index';

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{
                headerShown: false //tirando header
              }}
            />

            <Stack.Screen 
              name="Detalhes"
              component={Detalhes}
            />
        </Stack.Navigator>
    )
}