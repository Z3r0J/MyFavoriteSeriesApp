import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CharacterInformation } from '../character/CharacterInformation';

export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen name='CharacterInformation' children={CharacterInformation}/>
    </Stack.Navigator>

  )
}
