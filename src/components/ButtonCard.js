import React from 'react'
import { Button } from "@react-native-material/core";
import { StyleSheet } from 'react-native';

export default function ButtonCard() {
  return (
    <Button title='Discover' style={styles.button} />
  )
}

const styles = StyleSheet.create({
  button:{
      width:200,
      alignSelf:'center',
      backgroundColor:'orangered',
      marginVertical:15,
  },
})