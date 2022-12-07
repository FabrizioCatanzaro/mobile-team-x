import { ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

export default function CityCard(props) {
    let {img,name,continent, population, id} = props;

    return (
        <ScrollView style={[styles.cardCity, {flexDirection: 'column', padding: 5}]}>
            <Image source={{uri: img}} style={{ width: '100%', height: 250, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
            <Text style={styles.font}>{name}</Text>
            <Text style={styles.font}>{continent}</Text>
            <Text style={styles.font}>Population - {population}</Text>
            <Button title='Discover +' accessibilityLabel='Discover more' color={'#F68712'} onPress={() => Alert.alert('BOTON PRESIONADO')}/>
        </ScrollView>
    )

}
    const styles = StyleSheet.create({
        cardCity: {
            marginTop: 20,
            backgroundColor: 'black',
            borderStyle: 'solid',
            borderWidth: 5,
            borderRadius: 25,
        },

        font: {
            color: '#fff',
            textAlign: 'center',
            lineHeight: 30,
            fontSize: 20,
        },
    })