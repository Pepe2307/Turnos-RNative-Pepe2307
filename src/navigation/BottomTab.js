import HomeScreen from "../screens/HomeScreen";
import React from "react";
import SettingsScreen1 from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name = 'Home' component={ HomeScreen } > </Tab.Screen> */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen1} />
        </Tab.Navigator>
    )

}