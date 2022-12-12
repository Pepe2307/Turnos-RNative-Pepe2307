import { Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import CustomAddItem from '../../components/AddItem/AddItem';
import CustomModal from '../../components/Modal/Modal';
import FlatListItems from '../../components/FlatList_Items/Flatlist_Items';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const image = require('../../assets/images/glass.jpg');


const HomeScreen = () => {

    //******************     Lista de compra     ******************/ 
    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])

    const onHandlerChangeItem = (text) => setTextItem(text)
    const onHandlerAddItem = () => {
        setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem}])
        /* setItemList({...itemList, id: Math.random()*10, value: textItem}) */
        setTextItem('')
    }
    

    //******************     MODAL     ******************/ 
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const onHandlerDeleteItem  = id => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id))
        setItemSelected({})
        setModalVisible(!modalVisible)
    }
    const onHandlerModal = id => {
        setItemSelected(itemList.find(item => item.id === id))
        setModalVisible(!modalVisible)
    }



  return (

      <View style={styles.screen}>

        <ImageBackground source={image} resizeMode="cover" style={styles.fondo}>


            {/* //* Mi Modal (Habia puesto mal el {true} de transparent) */}
            <CustomModal
            modalVisible={modalVisible}
            itemSelected={itemSelected}
            onHandlerDeleteItem={onHandlerDeleteItem}
            />


            {/* //* BARRA DE BUSQUEDA Y ADD */}
            <CustomAddItem
            textItem={textItem}
            onHandlerChangeItem={onHandlerChangeItem}
            onHandlerAddItem={onHandlerAddItem}
            />


            {/* //*Lista de Compras/Items */}
            <FlatListItems
            itemList={itemList}
            onHandlerModal={onHandlerModal}
            />
            

        </ImageBackground>


        {/* <ImageBackground source={image2}>
            <Text style={styles.texto_items}>
                <Button title='Segunda pagina =>' onPress={()=>{}}style={styles.estilo_boton}/>
            </Text>
        </ImageBackground> */}
        
        <StatusBar style="auto" />

    </View>


  )
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
    

    /*//* EXTRAS / A BORRAR */
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default HomeScreen