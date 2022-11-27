import { Button, Text, View } from "react-native";

import React from "react";
import Settings1 from "./Settings1";
import Settings2 from "./Settings2";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

const SettingsHome = () => {
    const SettingsStack = createNativeStackNavigator();
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings1" component={Settings1} />
        <SettingsStack.Screen name="Settings2" component={Settings2} />
      </SettingsStack.Navigator>
    );
  };

export default SettingsHome;
