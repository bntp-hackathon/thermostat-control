import * as React from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";

function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 250, height: 250 }}
        source={require("../../../assets/empty.png")}
      />

      <Text style={{ fontSize: 20, color: "gray" }}>
        Устройства отсутствуют
      </Text>

      <View style={{ margin: 10 }}>
        <Button
          title="Добавить устройство"
          color="#0879cf"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
});

export default HomePage;
