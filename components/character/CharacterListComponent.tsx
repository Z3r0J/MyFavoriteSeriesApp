import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CharacterData } from '../helpers/CharacterData'

export const CharacterListComponent = ({ navigation }) => {

    return (
    <ScrollView>
        {CharacterData.map((ch,ind)=>{
            return(
                <View key={ind} style={styles.home}>
                    <Image 
                    source={{uri:ch.image,cache:'force-cache',width:1500}}
                    key={ind}
                    resizeMode='cover'
                    style={{width:'100%',height:'75%',padding:0,paddingEnd:0,paddingStart:0}}
                    
                    />
                    <Text style={styles.textCharacter}>{ch.name}</Text>
                    <Button 
                    title='Sobre este personaje' 
                    color={"#09DC02"} 
                    onPress={()=>{navigation.navigate('CharacterInformation',{data:ch})}}
                    />
                </View>
            )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    home:{
        height:400,
        width:320,
        padding:24,
        marginTop:9,
        backgroundColor:"#E5E5E5",
        marginStart:11,
        marginBottom:7,
        borderRadius:6,
        
    },
    textCharacter:{
        fontSize:17,
        marginTop:10,
        marginBottom:12,
        fontWeight:'bold',
        textAlign:'center'
    }
    })