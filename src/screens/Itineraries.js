import { ImageBackground, ScrollView, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tineraryActions from '../redux/actions/tineraryAction'
import TineraryCard from '../components/TineraryCard'
import { useRoute } from '@react-navigation/native'

export default function Itineraries() {
    const dispatch = useDispatch()
    const {getTineraryByCity} = tineraryActions
    const route = useRoute()
    const cityId = route.params.id

    //console.log("CITY ID: ", cityId);
    let {cityTineraries} = useSelector(store => store.tineraryReducer)

    useEffect( () => {
        dispatch(getTineraryByCity(cityId))
    }, [])

    return (
        <ScrollView style={[styles.details, {flexDirection: 'column'}]}>
        {cityTineraries.length !== 0 ?
        <>
            {cityTineraries.map( each => 
                    <TineraryCard key={each.name} itinerary={each} />
            )}
        </> : 
        <>
            <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 20, fontWeight: 'bold'}}>This city does not have tineraries yet &#128557;</Text>
            <Image source={require('../../assets/location_not_found.png')} style={{ width: '100%', height: 500}} />
        </>
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    details: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6ebdd',
    },
})