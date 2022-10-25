import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
export const CharacterInformation = ({ navigation }) => {
  const route = useRoute();
  return (
    <ScrollView style={{display:'flex'}} contentContainerStyle={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.cardInfo}>
          <Image
          source={{uri:route.params?.data.image,cache:'force-cache',width:1500}}
          style={{      
          width:'100%',
          height:'75%'}}
          resizeMode='cover'
          />
        <Text style={styles.nameText}>{route.params?.data.name}</Text>
        <ScrollView contentContainerStyle={{padding:10}}>
        <Text style={styles.bio}>{route.params?.data.bio}</Text>
        </ScrollView>
        <Button title='Atras' color={'#D504CB'} onPress={()=>{navigation.navigate('Character')}}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create(
  {
    cardInfo:{
      width:340,
      height:650,
      backgroundColor:'#9CC9B5',
      borderRadius:8,
      marginTop:0,
      justifyContent:'center'
    },
    imageStyle:{
      width:'100%',
      height:'75%'
    },
    bio:{    
    color: "#222",
    fontSize:14,
    width:'100%',
    textAlign:'auto',
    marginTop:10,
    marginBottom:12,
    fontWeight:'bold',
  },
  nameText:{
    fontSize:17,
    marginTop:10,
    marginBottom:12,
    fontWeight:'bold',
    textAlign:'center'
  }
  }
)
