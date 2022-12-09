import { ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CityCard(props) {
    let {img,name,continent, population, id} = props;

    const navigation = useNavigation()

    const navigateDetails = () => {
        navigation.navigate('CityDetails', {id: id})
    }
    //console.log(props)

    return (
        <ScrollView id={id} style={[styles.cardCity, {flexDirection: 'column', padding: 5}]}>
            <Image source={{uri: img}} style={{ width: '100%', height: 250, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.continent}>{continent}</Text>
            <Text style={styles.population}>Population - {population}</Text>
            <Button title='Discover +' accessibilityLabel='Discover more about this city' color={'#F68712'} onPress={navigateDetails}/>
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
            height: 390,
        },

        name: {
            color: '#fff',
            textAlign: 'center',
            lineHeight: 30,
            fontSize: 25,
            fontWeight: 'bold',
            paddingTop: 7,
            fontFamily: 'sans-serif-condensed',
        },
        
        continent: {
            color: '#F68712',
            textAlign: 'center',
            lineHeight: 30,
            fontSize: 18,
            fontStyle: 'italic',
            fontFamily: 'sans-serif-medium'
        },

        population: {
            color: '#fff',
            textAlign: 'center',
            lineHeight: 30,
            fontSize: 18,
            paddingBottom: 5,
            fontFamily: 'sans-serif-medium'
        },
    })