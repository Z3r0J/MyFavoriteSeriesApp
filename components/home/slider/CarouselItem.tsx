import React from 'react'
import { Dimensions, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
export const SLIDER_WIDTH = Dimensions.get('window').width + 120
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5)


export const CarouselItem = ({ item, index }) => {
  return (
    <View key={index} style={styles.container}>
      <Image source={{ uri: item.image }}
      style={styles.image}
      />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    height:438,
  },
  image: {
    width: 390,
    height: 300,
    resizeMode:'cover'
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft:20
  },
  body: {
    color: "#222",
    fontSize: 17,
    width:'60%',
    textAlign:'auto',
    paddingStart:17,
    marginBottom:8
  }
})