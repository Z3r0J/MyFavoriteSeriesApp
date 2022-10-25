import React from 'react'
import { Button, Image, ScrollView, StyleSheet, View,Text } from 'react-native'
import { BestMoments } from '../helpers/BestMoments'

export const ListMomentsComponent = ({ navigation }) => {
  return (
    <ScrollView>
    {BestMoments.map((bm,ind)=>{
        return(
            <View key={ind} style={styles.home}>
                <Image 
                source={{uri:bm.image,cache:'force-cache',width:1500}}
                key={ind}
                resizeMode='cover'
                style={{width:'100%',height:'75%',padding:0,paddingEnd:0,paddingStart:0}}
                />
                <Text style={styles.textCharacter}>{bm.name}</Text>
                <ScrollView>
                    <Text>{bm.shortDescription}</Text>
                </ScrollView>
                <Button 
                title='VER' 
                color={"#09DC02"} 
                onPress={()=>{navigation.navigate('MomentsInformation',{data:bm})}}
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