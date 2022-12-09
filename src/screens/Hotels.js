import { View, Text, ScrollView, StyleSheet, ImageBackground, TextInput, Image } from 'react-native'
import React from 'react'
import { useLayoutEffect, useEffect, useState } from 'react'
import Select from '../components/Select'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import HotelCard from '../components/HotelCard'
import TitleMyTinerary from '../components/TitleMyTinerary'

export default function Hotels() {
  
  const dispatch = useDispatch()
  const {getHotels, getHotelsFiltered} = hotelActions
  const {hotels} = useSelector(store => store.hotels)
  const ImageHome = {uri:"https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804479__340.jpg"}
  let [dataHotels, setDataHotels] = useState([])

  useLayoutEffect(()=>{
      if(hotels.length === 0){
        dispatch(getHotels())
      }
    },[])
    
    function filterSelect(event) {
      let name = event
      let order = event

      if (order !== 'asc' && order !== 'desc') {
          order = 'asc'
      }
      let data = {
          name:'',
          order
      }
      dispatch(getHotelsFiltered(data))
  }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <TitleMyTinerary title='Tinerary'/>
      <View>
          <Text style={styles.titleHotels}>Hotels</Text>
      </View>
      <ImageBackground source={ImageHome} resizeMode='strech' style={styles.image}/>
      <View style={styles.containerSelect}>
        <TextInput onChangeText={filterSelect} style={styles.tituloInput}  placeholder="Search Name" />
        <Select evento={filterSelect} />
      </View>
      {hotels.length > 0 ? hotels.map(each => <HotelCard key={each?._id} name={each?.name} photo={each?.photo} description={each?.description} capacity={each?.capacity} id={each?._id}  /> )  : console.log('hola')  }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerSelect:{
    backgroundColor:'#F0F3F4',
  },
  titleHotels:{
    fontSize:22,
    textAlign:'center',
    marginTop:10,
    fontFamily:'Avenir Next',
    color:'orangered',
  },
  image:{
    flex:1,
    height:300,
    backgroundColor:'black',
    justifyContent:'center',
    marginTop:25,
  },
  tituloInput:{
    textAlign:'center',
    marginTop:30,
    fontSize:18,
  },
})