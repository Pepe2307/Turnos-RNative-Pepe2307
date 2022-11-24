import { Button, Text, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Este es settings 1</Text>
      <Button title="Cambiar de stack" onPress={() => navigation.navigate("Settings2")} />
    </View>
  );
};

export default SettingsScreen1;
