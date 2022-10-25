import React from 'react'
import { useColorScheme, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeComponent } from '../home/HomeComponent';
import { CharacterInformation } from '../character/CharacterInformation';
import { CharacterListComponent } from '../character/CharacterListComponent';
import { MomentsInformationComponent } from '../bestmoments/MomentsInformationComponent';
import { ListMomentsComponent } from '../bestmoments/ListMomentsComponent';
import { AboutComponent } from '../about/AboutComponent';

export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    const isDarkMode = useColorScheme() === 'dark';

  return (
    <Drawer.Navigator
    initialRouteName='HomeComponent'
    screenOptions={{headerTintColor:isDarkMode?"rgb(255,255,255)":"rgb(0,0,0)"}}
    >
        <Drawer.Screen name='Inicio' component={HomeComponent}/>
        <Drawer.Screen name='Character' component={CharacterListComponent}/>
        <Drawer.Screen name='ListMoments' component={ListMomentsComponent}/>
        <Drawer.Screen name='Acerca De' component={AboutComponent}/>
        <Drawer.Screen name='CharacterInformation' component={CharacterInformation} options={{drawerItemStyle:{display:'none'}}}/>
        <Drawer.Screen name='MomentsInformation' component={MomentsInformationComponent} options={{drawerItemStyle:{display:'none'}}}/>
    </Drawer.Navigator>
  )
}
