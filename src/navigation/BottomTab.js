import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors";
import Categories from "../screens/Categories/CategoriesScreen";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import SettingsHome from "../screens/Settings/SettingsHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Logo = () => {
    return(
        <Image source={require('../../assets/images/rina_icon.png')}
        style={{width:30,height:30,}}
        />
    )
}


const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
        
        screenOptions={{
            headerShown: false,
            // headerTitle:(props) => <Logo {...props}/>,
            
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ?
                COLORS.Red_Custom : COLORS.Grey_Custom
            },
            headerTintColor: COLORS.White,
            /* headerTitleStyle:{
                fontWeight:'bold'
            }, */
            
    
    
            
            // tabBarIcon: (props) => <Logo {...props}/>,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar,
            }}
        >
            
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        }}>
                        <Image
                            source={require('../../assets/images/rina_icon.png')}
                            resizeMode='contain'
                            style={{
                                width:30,
                                height:30,
                                tintColor: focused ? COLORS.Red_Custom : COLORS.Grey_Custom
                            }}
                        />

                        <Text
                            style={{
                                color: focused ? COLORS.Red_Custom : COLORS.Grey_Custom,
                                fontSize:12,
                            }}>
                            Home Turnos
                        </Text>
                        
                    </View>
                ),
                title:'Home Turnos'
            }}/>

            <Tab.Screen name="Settings" component={SettingsHome} options={{
                tabBarIcon: ({focused}) => (
                    <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        }}>
                        <Image
                            source={require('../../assets/images/configuration.png')}
                            resizeMode='contain'
                            style={{
                                width:30,
                                height:30,
                                tintColor: focused ? COLORS.Red_Custom : COLORS.Grey_Custom
                            }}
                        />

                        <Text
                            style={{
                                color: focused ? COLORS.Red_Custom : COLORS.Grey_Custom,
                                fontSize:12,
                            }}>
                            Configuracion
                        </Text>
                        
                    </View>
                ),
                title:'Home Turnos'
            }}/>


            <Tab.Screen name="Categorias" component={Categories}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                            <Image
                                source={require('../../assets/images/rina_icon.png')}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor: focused ? COLORS.Red_Custom : COLORS.Grey_Custom
                                }}
                            />

                            <Text
                                style={{
                                    color: focused ? COLORS.Red_Custom : COLORS.Grey_Custom,
                                    fontSize:12,
                                }}>
                                Categorias
                            </Text>
                            
                        </View>
                    ),
                    title:'Categorias'
            }}/>
            
        </Tab.Navigator>
    )

}


const styles = StyleSheet.create({

    tabBar:{
        position:'absolute',
        bottom:35,
        left:20,
        right:20,
        backgroundColor:'#ffffff',
        borderRadius:15,
        height:90,

        elevation:20,
        /* Para Android */
        
        shadowColor: COLORS.Red_Custom,
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.5,
        shadowRadius:3.5,
        /* Para IOS */
    },
});


// export default Tabs;