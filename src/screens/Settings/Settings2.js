import { Button, Text, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const Settings2 = () => {
    const navigation = useNavigation();
    return (
    <View>
        <Text>Bienvenido a settings 2</Text>
        <Button title="Cambiar de stack" onPress={() => navigation.navigate("Settings1")} />
    </View>
    );
};

export default Settings2;
