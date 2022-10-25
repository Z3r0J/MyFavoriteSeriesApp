import React from 'react'
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import YoutubePlayer from 'react-native-youtube-iframe'

export const MomentsInformationComponent = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <YoutubePlayer
        height={300}
        videoId={route.params?.data.youtubeURL}
        play={true}
      />
        <Text
        style={{fontSize:18,marginBottom:15,textAlign:'center'}}
        >{route.params?.data.name}</Text>
        <ScrollView style={{padding:8}}>
        <Text 
        style={{fontSize:15,marginBottom:13}}
        >{route.params?.data.description}</Text>
        <Button
        title='ATRAS'
        onPress={()=>navigation.navigate("ListMoments")}
        />
        </ScrollView>

    </View>
  )
}