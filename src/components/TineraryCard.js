import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Reaction from '../components/Reaction'

export default function TineraryCard(props) {
    let { itinerary } = props

    return (
            <View>
                <View style={styles.cardTinerary}>
                    <View>
                        <Image source={{uri: itinerary.photo[0]}} style={{ width: '100%', height: 250, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
                    </View>
                    <View>
                        <Text style={styles.name}>{itinerary.name}</Text>
                        <Text style={styles.description}>{itinerary.description}</Text>
                        <Text style={styles.duration}>Duration - {itinerary.duration} HS</Text>
                        <Text style={styles.price}>Price - U$D {itinerary.price}</Text>
                    </View>
                    <View style={styles.reaction}>
                        <Reaction activityId={itinerary._id} />
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    cardTinerary: {
        marginTop: 20,
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 25,
        minHeight: 500,
    },

    name: {
        color: '#F68712',
        textAlign: 'center',
        lineHeight: 35,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 7,
        paddingHorizontal: 6,
        fontFamily: 'sans-serif-condensed'
    },

    description: {
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 15,
        fontStyle: 'italic',
        paddingHorizontal: 8,
        fontFamily: 'sans-serif-medium'
    },

    duration: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 22,
        paddingVertical: 7,
        fontFamily: 'sans-serif-medium'
    },

    price: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 22,
        paddingVertical: 7,
        fontFamily: 'sans-serif-medium'
    },

    reaction: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
})
