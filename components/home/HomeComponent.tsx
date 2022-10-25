import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { CarouselHome } from './slider/CarouselHome'
import { ITEM_WIDTH } from './slider/CarouselItem'

export const HomeComponent = () => {
  return (
    <View style={{padding:3}}>
      <CarouselHome/>
    </View>
  )
}
