import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { CATEGORIES } from '../../../data/categories';
import { COLORS } from '../../../constants/colors';
import Category_item from '../../../components/Category-item/Category_item';
import React from 'react';

const Categories = ({ navigation, route }) => {

  const onSelected = (item) => {
    navigation.navigate('Products', { categoryId: item.id, title: item.title, color: item.color });
  };

  const renderItem = ({ item }) => <Category_item item={item} onSelected={onSelected} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;


//! *************************************** Estilos ***************************************/
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        /* marginTop: isAndroid ? StatusBar.currentHeight : 0, */
      },
      title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: COLORS.text,
      },
      containerList: {
        flex: 1,
      },
})