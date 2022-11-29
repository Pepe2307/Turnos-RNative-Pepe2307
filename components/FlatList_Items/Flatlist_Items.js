import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import { COLORS } from "../../constants/colors";

export default function FlatListItems (parametros_FlatListItems) {

    const {itemList, onHandlerModal} = parametros_FlatListItems

    return(
        <View style={styles.container_lista}>

            

            <Text style={styles.titulo}>
                Lista de compra:
            </Text>


            <FlatList
            contentContainerStyle={styles.lista_compra}/* //* Esta forma da menos problemas? */
            data={itemList}
            renderItem={data => (
                <View style={styles.datos_item}>
                    <Text style={styles.texto_items}>
                        {data.item.value} 
                    </Text>

                    <Button title='Quitar Item' onPress={() => onHandlerModal(data.item.id)}
                    style={styles.estilo_boton}/>
                    
                    {/* A determinar que Boton queda mejor: */}
                    {/* <TouchableOpacity onPress={() => onHandlerModal(data.item.id)}
                    style={styles.estilo_boton}>
                        <Text style={styles.texto_items}>
                            Quitar Item
                        </Text>
                    </TouchableOpacity>
                    */}

                </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={true}
            indicatorStyle='black'
            />

        </View>
)}


const styles = StyleSheet.create({
    titulo:{
        alignSelf:'center',
        textAlign:'center',
        margin:'5%',

        color:'black',
        fontSize:40,
        fontFamily: 'TitilliumWeb-Regular',
        /* fontStyle: 'italic', */
        width:'85%',
        
        backgroundColor: 'rgba(241, 88, 25, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.White,
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
    },
    datos_item:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.White,
        width:'90%',
        margin:'5%',        
        alignContent:'center',
    },
    texto_items:{
        color:'black',
        textAlign:'center',
        margin:20,
        fontSize:30
    },
    estilo_boton:{
        backgroundColor:COLORS.Red_Custom,
        color: COLORS.White,
    },
})