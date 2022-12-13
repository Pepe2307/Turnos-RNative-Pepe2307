import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import React from 'react';
import { StyleSheet } from 'react-native';

/* import { selectCategory } from '../../store/actions'; */


const Category_item = ({ item, onSelected}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.contentContainer, backgroundColor: item.color }}
            onPress={ () => onSelected(item) } >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Category_item;


//! *************************************** Estilos ***************************************/
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 160,
      },
      contentContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: COLORS.text,
      },
})