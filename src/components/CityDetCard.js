import { ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CityDetCard(props) {
    let {img,name,continent, population, id} = props;

    const navigation = useNavigation()

    const navigateDetails = () => {
        navigation.navigate('Itineraries', {id: id})
    }

    return (
        <ScrollView id={id} style={[styles.cardCity, {flexDirection: 'column', padding: 5}]}>
            <Image source={{uri: img}} style={{ width: '100%', height: 380, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.continent}>{continent}</Text>
            <Text style={styles.population}>Population - {population}</Text>
            <Button title={`Discover tineraries`} accessibilityLabel={`Discover ${name} tineraries`} color={'#F68712'} onPress={navigateDetails}/>
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
            minHeight: 600,
        },

        name: {
            color: '#fff',
            textAlign: 'center',
            lineHeight: 60,
            fontSize: 50,
            fontWeight: 'bold',
            paddingTop: 10,
            fontFamily: 'sans-serif-condensed'
        },
        
        continent: {
            color: '#F68712',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 30,
            fontStyle: 'italic',
            fontFamily: 'sans-serif-medium'
        },

        population: {
            color: '#fff',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 30,
            letterSpacing: 3,
            paddingBottom: 20,
            fontFamily: 'sans-serif-medium'
        },
    })