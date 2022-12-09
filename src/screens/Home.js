import React from 'react'
import { View, ScrollView , StyleSheet, ImageBackground} from 'react-native'
import { Text, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import TitleMyTinerary from '../components/TitleMyTinerary'
import Divider from '../components/Divider'


export default function Home(props) {

    const ImageHome = {uri:"https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210__340.jpg"}
   
    const RedirectCities = ()=>{
        props.navigation.navigate('Cities')
    }

    const RedirectShow = ()=>{
        props.navigation.navigate('Shows')
    }

    const RedirectHotel = ()=>{
        props.navigation.navigate('Hotels')
    }

  
    return (
    <ScrollView style={{backgroundColor:'white',}}>
        <TitleMyTinerary title='Tinerary'/>
        <View style={styles.containerPrincipal}>
            <ImageBackground source={ImageHome} resizeMode='strech' style={styles.image}>
                <Text variant="h4" style={styles.titleBanner}>- Live your dream Trip -</Text>
        <View style={styles.containerButtonsRef}>
            <IconButton style={styles.buttonsRef} onPress={RedirectCities}  icon={props => <Icon style={styles.Icon} name="city" {...props}/>}/>
            <IconButton style={styles.buttonsRef} onPress={RedirectShow}   icon={props => <Icon style={styles.Icon} name="calendar-month-outline" {...props} />}/>
            <IconButton style={styles.buttonsRef} onPress={RedirectHotel}   icon={props => <Icon style={styles.Icon} name="city-variant-outline" {...props} />}/>
            <IconButton style={styles.buttonsRef} onPress={RedirectCities}   icon={props => <Icon style={styles.Icon} name="contacts-outline" {...props} />}/>
        </View>
            </ImageBackground>
        </View>
        <Divider/>
        <Text style={styles.textHome}>The best application, developed to provide the best information about your cities, itineraries, hotels and shows. You can see the reviews of other users, write your review, leave your reactions and more.</Text>
        <Divider/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    containerPrincipal:{
        flex:1,
        backgroundColor:'white',
    },
    image:{
        flex:1,
        height:500,
        backgroundColor:'black',
        justifyContent:'center',
    },
    titlePrincipal:{
        textAlign:'center',
        marginTop:35,
        color:'black',
        fontSize:40,
        fontFamily:'Avenir Next',
        fontWeight:"250",
    },
    titleBanner:{
        textAlign:'center',
        marginTop:410,
        color:'white',
        fontSize:23,
        fontFamily:'Avenir Next',
        fontWeight:"250",
        letterSpacing:3,
    },
    containerButtonsRef:{
        /* backgroundColor:'green', */
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonsRef:{
        width:60,
        /* backgroundColor:'red', */
        margin:5,
    },
    Icon:{
        /* backgroundColor:'yellow', */
        padding:8,
        color:'orange',
    },
    ImageIcon:{
        width:70,
        height:70,
    },
    textHome:{
        marginTop:50,
        paddingHorizontal:70,
        lineHeight:35,
        textAlign:'center',
        fontFamily:'Avenir Next',
    },
})