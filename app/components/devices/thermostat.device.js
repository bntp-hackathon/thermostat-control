import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import DialogButton from "react-native-dialog/lib/Button";
import DialogContainer from "react-native-dialog/lib/Container";
import DialogInput from "react-native-dialog/lib/Input";

function Thermostat({ name, rerenderParent }) {
  const [visible, setVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [room, setRoom] = useState("");

  const showDialog = () => setVisible(true);
  const handleCancel = () => setVisible(false);
  const handleAdd = async () => {
    const devices = JSON.parse(await AsyncStorage.getItem("devices")) ?? [];

    devices.push({
      name: displayName,
      room,
      temperature: 10.0,
      isEnabled: true,
      isLocked: false,
    });

    await AsyncStorage.setItem("devices", JSON.stringify(devices), () => {
      if (rerenderParent) {
        console.log("rerender parent");
        rerenderParent();
      } else {
        console.log("re is undefined");
      }
    });
    setVisible(false);
  };

  return (
    <TouchableOpacity onPress={showDialog}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../../assets/devices/thermostat.png")}
        ></Image>
        <Text style={{ color: "gray" }}>{name}</Text>
      </View>

      <DialogContainer visible={visible}>
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        </View>

        <DialogInput label="Название" onChangeText={setDisplayName} />
        <DialogInput label="Комната" onChangeText={setRoom} />

        <DialogButton label="Отменить" onPress={handleCancel} />
        <DialogButton label="Добавить" onPress={handleAdd} />
      </DialogContainer>
    </TouchableOpacity>
  );
}

export default Thermostat;
