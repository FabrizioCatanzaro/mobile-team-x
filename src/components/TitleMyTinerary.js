import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function TitleMyTinerary(props) {
    let {title} = props

  return (
    <View style={styles.containerLogoTitle}>
        <Image style={styles.ImageIcon}  source={require('../../assets/logo.png')} /> 
        <Text style={styles.titleMyTinerary}>My {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleMyTinerary:{
        fontSize:32,
        textAlign:'center',
        marginTop:6,
        marginLeft:5,
        letterSpacing:'1',
        fontFamily:'Avenir Next',
        fontWeight:'400',
    },
    containerLogoTitle:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      paddingVertical:15,
    },
    ImageIcon:{
      width:35,
      height:35,
    },
})