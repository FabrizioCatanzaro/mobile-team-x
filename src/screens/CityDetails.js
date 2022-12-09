import { ImageBackground, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../redux/actions/cityAction'
import CityDetCard from '../components/CityDetCard'
import { useRoute } from '@react-navigation/native'

export default function CityDetails() {
    const dispatch = useDispatch()
    const {getOneCity} = cityActions
    let {oneCity} = useSelector(store => store.cityReducer)
    const route = useRoute()
    const cityId = route.params.id

    useEffect( () => {
        dispatch(getOneCity(cityId))
    }, [])

    const image = {uri : "https://img.freepik.com/foto-gratis/imagen-vertical-gondolas-gran-canal-coloridos-edificios-venecia-italia_181624-24146.jpg?w=740&t=st=1670525079~exp=1670525679~hmac=4ac832bd1be1ccb7453291594d8b03ca0fe34b6d5dd59c757b62c2ef633d963a"}

    return (
        <ScrollView style={[styles.details, {flexDirection: 'column'}]}>
            <CityDetCard id={cityId} img={oneCity?.photo} name={oneCity?.name} continent={oneCity?.continent} population={oneCity?.population} />
        </ScrollView>
/*         <ScrollView style={[styles.details, {flexDirection: 'column'}]}>
            <ImageBackground source={image} style={styles.background} resizeMode="cover">
                <CityDetCard img={oneCity?.photo} name={oneCity?.name} continent={oneCity?.continent} population={oneCity?.population} />
            </ImageBackground>
        </ScrollView> */
    )
}
const styles = StyleSheet.create({
    details: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6ebdd',
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        padding: 20,
    }

})