import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CityCard from '../components/CityCard'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../redux/actions/cityAction'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Cities(props) {
    const dispatch = useDispatch()
    const {getCities, filterCities} = cityActions
    const { categories, cities } = useSelector( (store) => store.cityReducer )
    let searchInput = useRef()
    let [checked, setChecked] = useState([])

    //console.log(props)

    useEffect( () => {
        if (cities.length === 0){
            dispatch(getCities())
        }
    }, [])

/*     const navigateDetails = () => {
        props.navigation.navigate('CityDetails', { id: id})
    } */
    
    let filter = (event) => {
        console.log(event)
        let text = event.trim()
        dispatch(filterCities({value: text}))
    }

/*     let checkFunction = (e) => {
        let auxArray = []
        if(e.target.checked){
            auxArray.push(...checked, e.target.value)
        } else {
            auxArray = checked.filter( ele => ele !== e.target.value)
        }
        setChecked(auxArray)
        return auxArray
    } */

    return (
        <ScrollView style={[styles.allCities, {flexDirection: 'column'}]}>
            <Text style={{textAlign: 'center', fontSize: 40, letterSpacing: 3, fontWeight: 'bold'}} >My Tinerary</Text>
            <Text style={{textAlign: 'center', fontSize: 30, letterSpacing: 2, color: '#F68712'}} >Cities</Text>
            <TextInput style={styles.textInput} onChangeText={filter} ref={searchInput} placeholder="Find city by its name..." />
            <View>
                { categories.map ( e =>
                    <BouncyCheckbox
                        key={`${e}`}
                        size={15}
                        fillColor="#F68712"
                        unfillColor="#FFFFFF"
                        text={`${e}`}
                        iconStyle={{ borderColor: "#F68712" }}
                        innerIconStyle={{ borderWidth: 1 }}
                        onPress={() => {}}
                    />
                )}
            </View>
            {(cities.length > 0)
                ? cities.map(each=><CityCard key={each?._id} name={each?.name} id={each?._id} continent={each?.continent} img={each?.photo} population={each?.population}/>)
                :
                <>
                    <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 20, fontWeight: 'bold'}} >Try again! We do not have that city</Text>
                    <Image source={require('../../assets/not_found.png')} style={{ width: '100%', height: 500}} />
                </>
                }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    allCities: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 100,
        backgroundColor: '#f6ebdd',
        height: '100%'
    },
    textInput: {
        height: 30,
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 25,
    },
})