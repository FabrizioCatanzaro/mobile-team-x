import { ScrollView, Text, View, Image, Button, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useNavigation } from '@react-navigation/native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

export default function SignUp() {

    const navigation = useNavigation()

    let [name, setName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [photo, setPhoto] = useState('')
    let [country, setCountry] = useState('')
    let [age, setAge] = useState('')
    let [password, setPassword] = useState('')

    let goToSignIn = () => {
        console.log("go to signin")
        // proxima tarea es hacer el signIn y navegar a esa pantalla
    }

    let handleSubmit = () => {
        let data = {
            name: name,
            lastName: lastName,
            email: email,
            photo: photo,
            country: country,
            age: age,
            password: password,
            role: 'user'
        }
        axios.post(`${BASE_URL}/api/auth/sign-up`, data)
            .then(response => {
                if(response.data.success){
                    Alert.alert(`${response.data.message}, please check your mail to validate your account!`)
                    navigation.navigate('Cities')
                    //proximamente navegará a la pantalla "HOME" en lugar de cities
                } else {
                    response.data.message.forEach(mess => Alert.alert(mess))
                }
            })
            .catch ( err => Alert.alert(err.message))
        }

    return (
        <ScrollView style={{padding: 10}} >
            <Text style={{fontSize: 18, fontStyle: 'italic', fontFamily: 'sans-serif-light'}} >Don't have an account yet?</Text>
            <Text style={{fontSize: 50, fontFamily: 'sans-serif-medium', fontWeight: 'bold', borderBottomWidth: .5, paddingLeft: 5, width:'70%', borderColor:'black'}} >Register now</Text>
            <View style={{flex:1, alignItems: 'center'}}>
                <TextInput style={styles.input} placeholder='First name' value={name} onChangeText={(e) => setName(e)} />
                <TextInput style={styles.input} placeholder='Last name' value={lastName} onChangeText={(e) => setLastName(e)} />
                <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} />
                <TextInput style={styles.input} placeholder='Your photo (URL)' value={photo} onChangeText={(e) => setPhoto(e)} />
                <TextInput style={styles.input} placeholder='Country' value={country} onChangeText={(e) => setCountry(e)} />
                <TextInput style={styles.input} placeholder='Age' value={age} onChangeText={(e) => setAge(e)} />
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} passwordRules={true} value={password} onChangeText={(e) => setPassword(e)} />
            </View>
            <View>
                <Text style={styles.button} onPress={handleSubmit} >SIGN UP</Text>
                <Text style={{fontSize: 18, textAlign: 'center'}} >Already have an account?</Text>
                <Text style={styles.signInButton} onPress={goToSignIn} >Log In</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        width: '100%',
        fontSize: 18,
        marginTop: 20,
        fontWeight: '600',
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingRight: 20,
    },
    signInButton: {
        marginVertical: 20,
        fontSize: 30,
        color: '#F68712',
        textAlign: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        width: '100%'
    },
    button: {
        marginVertical: 20,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#F68712',
        borderRadius: 10,
        width: '100%'
    }
})