import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const HiredMeComponent = () => {
  return (    
  
  <View style={{padding:"3%"}}>
  <Image source={require('../../assets/images/85190332.jpg')} style={{width:"100%",height:'65%'}}/>
      <View style={styles.listStyle}>
        <Text style={styles.item}>Nombre: Jean Carlos Reyes</Text>
        <Text style={styles.item}>Telefono: 829-935-0913</Text>
      </View>
</View>
  )
}

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 20,
        flexDirection: 'column',
      },
    item: {
        fontSize: 18,
        marginTop: 8,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0DC195',
        color: '#5A5D5C',
        fontWeight:'700',
        fontStyle:'italic',
        marginStart:9
      }
})