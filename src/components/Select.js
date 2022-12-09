import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View , TextInput} from "react-native";


export default function Select(props) {

    let {evento} = props
    
    return (
         <View style={styles.container}>
             <RNPickerSelect style={styles.select} onValueChange={evento}
                 items={ [
                     { label: "Ascendent", value: "asc" },
                     { label: "Descendent", value: "desc" },
                 ]}
             />
         </View>
     );
 }

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        color:'red',
        paddingLeft:170,
        padding:10,
    },
    select:{
        backgroundColor:'blue',
        textAlign:"center",
        fontSize:30,
    },
    tituloPrincipal:{
        /* backgroundColor:'red', */
        flex:1,
    },    
})
