import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import DialogButton from "react-native-dialog/lib/Button";
import DialogContainer from "react-native-dialog/lib/Container";
import DialogInput from "react-native-dialog/lib/Input";
import DialogSwitch from "react-native-dialog/lib/Switch";

function Thermostat({ name }) {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const handleCancel = () => setVisible(false);

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

        <DialogInput label="Название" />
        <DialogInput label="Комната" />

        <DialogButton label="Отменить" onPress={handleCancel} />
        <DialogButton label="Добавить" onPress={handleCancel} />
      </DialogContainer>
    </TouchableOpacity>
  );
}

export default Thermostat;
