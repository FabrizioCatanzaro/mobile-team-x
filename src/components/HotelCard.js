import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import ButtonCard from './ButtonCard'

export default function HotelCard(props) {
    let {name,photo,capacity, description, id} = props

  return (
    <View style={styles.containerCard}>
        <View>
            <Image style={styles.image} source={photo} resizeMode='strech'/>
        </View>
        <View style={styles.containerBodyCard}>
            <Text style={styles.titleHotel}>{name}</Text>
            <Text style={styles.descriptionHotel}>{description}</Text>
            <Text style={styles.capacityHotel}>Capacity: <Text style={styles.capacityNumber}>{capacity}</Text></Text>
        </View>
        <ButtonCard/>
    </View>
  )
}

const styles = StyleSheet.create({
    containerCard:{
        /* backgroundColor:'red', */
        marginVertical:20,
    },
    image:{
        height:300,
        backgroundColor:'black',
        justifyContent:'center',
        marginTop:25,
      },
      titleHotel:{
          /* backgroundColor:'yellow', */
          fontSize:19,
          textAlign:'center',
          fontFamily: 'Gill Sans' ,
          marginVertical:15,
          color:'orangered',
      },
      containerBodyCard: {
          padding:12,
      },
      descriptionHotel:{
          textAlign:'center',
          lineHeight:22,
          paddingHorizontal:16,
      },
      capacityHotel:{
          textAlign:'center',
          marginVertical:25,
          fontSize:20,
      },
      capacityNumber:{
        fontSize:20,
        color:'orangered',
        fontWeight:'300',
    },
    button:{
        backgroundColor:'red',
    }
})