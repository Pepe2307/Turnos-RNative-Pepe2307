import { Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import { BottomTab } from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

//! *************************************** Aplicacion ***************************************/
//todo *********************    Funciones    *******************/
export default function App() {
  return (
    <View style={styles.screen}>

            <NavigationContainer>
                <BottomTab></BottomTab>
            </NavigationContainer>

        <StatusBar style="auto" />

    </View>
  );
}
//! *************************************** Estilos ***************************************/
const styles = StyleSheet.create({

    /*//* PANTALLA GENERAL */
    screen:{
        flex:1,
        justifyContent: 'center' /* funciona? */
        },
    fondo: {
        flex: 1,
    },


    /*//* BUSQUEDA DE ITEMS */
    container_busqueda:{
        flexDirection:'row',
        justifyContent:'space-around',
        
        width:'95%',
        alignSelf:'center',
        marginTop:'15%',

        alignItems:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.20)',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white',
    },
    busqueda_texto:{
        textAlign:'left',
        width:250,
        fontSize:35,
        opacity: 0.65,
    },
    busqueda_boton: { /* No afecta nada? */
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 30,
        /* height: '30%', */
      },


    /*//* LISTA DE ITEMS */
    titulo:{
        alignSelf:'center',
        textAlign:'center',
        margin:'5%',

        color:'black',
        fontSize:40,
        fontStyle: 'italic',
        width:'85%',
        
        backgroundColor: 'rgba(241, 88, 25, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    container_lista:{
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
    },
    lista_compra:{
        backgroundColor: 'rgba(255, 88, 25, 0.1)',
        borderRadius: 40,
        borderWidth: 1,
        
        borderColor: 'white',
        alignItems:'stretch',
        alignContent:'center',
        /* marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff', */
    },
    datos_item:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignSelf:'flex-end',
        backgroundColor: 'rgba(225, 85, 35, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width:'90%',
        margin:'5%',
        /* gap:'50%', BUSCAR REEMPLAZO DE GAP, GAP NO TIENE SOPORTE EN NATIVE*/
        alignSelf:'center',
    
        justifyContent:'center',
        alignContent:'center',
    },
    texto_items:{
        color:'black',
        textAlign:'center',
        margin:20,
        fontSize:30
    },
    estilo_boton:{
        backgroundColor:'red',
        color:'#fff',
        /* borderBottomColor:'#eee',
        borderBottomWidth:5, */
    },
    

    /*//* MODAL */
    modal_Container:{
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    
    modal_View:{
        /* flex:1, */
        flexShrink: 1, //Achica para mostrar solo necesario
        flexDirection: 'column',
        maxWidth:'80%',
        maxHeight:'45%',


        justifyContent:'space-evenly',
        alignItems: 'center',

        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: '5%',
        
    },
    modal_titulo:{
        backgroundColor: 'black',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'black',
        color: 'white',
        fontSize: 40,
        width:'100%',
        
        /* 
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center', */
    },
    modal_confirmacion:{
        color: 'white',
        fontSize: 20,
    },
    modal_mensaje_container:{
        backgroundColor: 'red',
        color: 'red',
        fontSize: 30,
        },
    modal_mensaje_item:{
        backgroundColor: 'blue',
        color: 'red',
        fontSize: 20,
    },
    modal_boton:{

    },

    

    /*//* EXTRAS / A BORRAR */
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});