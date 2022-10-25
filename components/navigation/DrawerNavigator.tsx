import React from 'react'
import { useColorScheme, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeComponent } from '../home/HomeComponent';
import { CharacterInformation } from '../character/CharacterInformation';
import { CharacterListComponent } from '../character/CharacterListComponent';
import { MomentsInformationComponent } from '../bestmoments/MomentsInformationComponent';
import { ListMomentsComponent } from '../bestmoments/ListMomentsComponent';
import { AboutComponent } from '../about/AboutComponent';
import { InMyLifeComponent } from '../InMyLife/InMyLifeComponent';
import { HiredMeComponent } from '../hiredme/HiredMeComponent';

export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    const isDarkMode = useColorScheme() === 'dark';

  return (
    <Drawer.Navigator
    initialRouteName='HomeComponent'
    screenOptions={{headerTintColor:isDarkMode?"rgb(255,255,255)":"rgb(0,0,0)"}}
    >
        <Drawer.Screen name='Inicio' component={HomeComponent} options={{title:"Inicio"}}/>
        <Drawer.Screen name='Character' component={CharacterListComponent} options={{title:"Personajes"}}/>
        <Drawer.Screen name='ListMoments' component={ListMomentsComponent} options={{title:"Momentos"}}/>
        <Drawer.Screen name='Acerca De' component={AboutComponent} options={{title:"Acerca De"}}/>
        <Drawer.Screen name='InMyLife' component={InMyLifeComponent} options={{title:"En mi Vida"}}/>
        <Drawer.Screen name='HiredMe' component={HiredMeComponent} options={{title:"Contratame"}}/>
        <Drawer.Screen name='CharacterInformation' component={CharacterInformation} options={{title:"Informacion del Personaje",drawerItemStyle:{display:'none'}}}/>
        <Drawer.Screen name='MomentsInformation' component={MomentsInformationComponent} options={{title:"Informacion Momentos",drawerItemStyle:{display:'none'}}}/>
    </Drawer.Navigator>
  )
}
