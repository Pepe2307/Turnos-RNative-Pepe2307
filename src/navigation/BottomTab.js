import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import SettingsScreen1 from "../screens/SettingsScreen";
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
            /* headerShown: false, */
            // headerTitle:(props) => <Logo {...props}/>,
            
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ?
                COLORS.Red_Custom : COLORS.Grey_Custom
            },
            headerTintColor: COLORS.White,
            /* headerTitleStyle:{
                fontWeight:'bold'
            }, */
            
    
    
            
            tabBarIcon: (props) => <Logo {...props}/>,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar,
            }}
        >
            {/* <Tab.Screen name = 'Home' component={ HomeScreen } > </Tab.Screen> */}
            <Tab.Screen name="Home" component={HomeScreen}
            options={{ /* headerTitle: (props) => <Logo {...props} /> */ title: 'Home Menu'}}/>
            <Tab.Screen name="Settings" component={SettingsScreen1} />
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