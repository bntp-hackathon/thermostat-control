import * as React from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";

function ScenariosPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
                style={{ width: 250, height: 270 }}
                source={require("../../../assets/scenarios.png")}
            />
            <View style={{ margin: 10 }}>
                <Button
                    title="Добавить устройство"
                    color="#0879cf"
                    onPress={() => navigation.navigate("Add scenario")}
                />
            </View>
        </View>
    )
}

export default ScenariosPage;