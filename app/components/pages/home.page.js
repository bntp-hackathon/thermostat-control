import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

function forceUpdate() {
  const [value, setValue] = React.useState(0);
  return () => setValue((value) => value + 1);
}

function HomePage({ navigation }) {
  const [devices, setDevices] = React.useState([]);
  const rerender = forceUpdate();

  const emptyTemplate = (
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
          onPress={() =>
            navigation.navigate("Add device", {
              rerenderParent: () => {
                console.log("here");
                setDevices(null);
              },
            })
          }
        />
      </View>
    </View>
  );

  const [content, setContent] = React.useState(emptyTemplate);

  useEffect(
    () => {
      const loadDevices = async () => {
        console.log("load devices");
        const storageItem = await AsyncStorage.getItem("devices");
        const devicesInStorage = JSON.parse(storageItem) ?? [];
        console.log(devicesInStorage);

        if (
          devicesInStorage.length > 0 &&
          (devices ?? []).length !== devicesInStorage.length
        ) {
          setDevices(devicesInStorage);

          setContent(
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "stretch",
              }}
            >
              {devicesInStorage.map((device) => (
                <Card style={{ margin: 10 }}>
                  <Card.Content>
                    <TouchableOpacity style={{ width: 76 }}>
                      <Image
                        style={{ width: 76, height: 100 }}
                        source={require("../../../assets/devices/thermostat.png")}
                      ></Image>

                      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        {device.name}
                      </Text>
                      <Text style={{ color: "gray" }}>{device.room}</Text>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              ))}

              <Card style={{ margin: 10, opacity: 0.5 }}>
                <Card.Content>
                  <TouchableOpacity
                    style={{ width: 76 }}
                    onPress={() =>
                      navigation.navigate("Add device", {
                        rerenderParent: () => {
                          console.log("here");
                          setDevices(null);
                        },
                      })
                    }
                  >
                    <Ionicons
                      name="add"
                      style={{
                        textAlign: "center",
                        fontSize: 40,
                        marginBottom: 14,
                      }}
                    />
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                      Добавить устройство
                    </Text>
                  </TouchableOpacity>
                </Card.Content>
              </Card>
            </View>
          );
        }
      };

      loadDevices();
    },
    devices,
    setDevices
  );

  return <>{content}</>;
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
});

export default HomePage;
