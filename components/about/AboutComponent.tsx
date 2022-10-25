
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export const AboutComponent = () => {
  return (
    <ScrollView style={styles.listStyle}>
                    <Image
      source={require('../../assets/images/GrimmLogo.png')}
      resizeMethod='scale'
      resizeMode='contain'
      style={{maxWidth:330,padding:0,margin:0,alignItems:'center',display:'flex',justifyContent:'center'}}
      />
        <View><Text style={styles.item}>Temporadas: 6 (123 Episodios)</Text></View>
        <View><Text style={styles.item}>Creador(es): Stephen Carpenter, Jim Kouf & David Greenwalt </Text></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 20,
        flexDirection: 'column',
      },
    item: {
        fontSize: 16,
        marginTop: 8,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0DC195',
        color: '#5A5D5C',
      }
})