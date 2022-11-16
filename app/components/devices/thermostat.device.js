import { View, Image, Text, TouchableOpacity } from "react-native";

function Thermostat({ name }) {
  return (
    <TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../../assets/devices/thermostat.png")}
        ></Image>
        <Text style={{ color: "gray" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Thermostat;
