import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export const InMyLifeComponent = () => {
  return (
    <ScrollView style={{padding: 3,}}>
        <Text style={{fontSize:16, fontWeight:'700',marginStart:15,marginEnd:10, marginTop:10}}>
            Esta serie en mi vida me ayudo a darme cuenta de varias cosas, entre la cuales destaca
            que no todo se ven como son por fuera sino que cada ser humano tiene algo diferente que lo hace
            unico como persona y es nuestro yo interior.
            No todos pueden decir que gozan de un yo interior noble porque no es cierto ya que dentro de esa nobleza se encuentra un ser diferente
            aparte esta serie me hizo abrir los ojos para ver el mundo de manera diferente.
        </Text>
    </ScrollView>
  )
}
