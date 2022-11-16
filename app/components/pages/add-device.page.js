import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import Thermostat from "../devices/thermostat.device";

function AddDevicePage({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 30 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Добавить вручную</Text>

      <View
        style={{
          margin: 12,
        }}
      >
        <Text style={{ fontSize: 20 }}>Термостаты</Text>

        <View style={{ flexDirection: "row" }}>
          <Thermostat name="Thermostat 1" />
          <Thermostat name="Thermostat 2" />
          <Thermostat name="Thermostat 3" />
        </View>

        <View style={{ flexDirection: "row", marginBottom: 34 }}>
          <Thermostat name="Thermostat 4" />
          <Thermostat name="Thermostat 5" />
          <Thermostat name="Thermostat 6" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Thermostat name="Thermostat 7" />
          <Thermostat name="Thermostat 8" />
          <Thermostat name="Thermostat 9" />
        </View>

        <View style={{ flexDirection: "row", marginBottom: 34 }}>
          <Thermostat name="Thermostat 10" />
          <Thermostat name="Thermostat 11" />
          <Thermostat name="Thermostat 12" />
        </View>
      </View>
    </View>
  );
}

export default AddDevicePage;
