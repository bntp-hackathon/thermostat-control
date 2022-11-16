import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

function AccountPage() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 26,
        }}
      >
        <Image
          source={require("../../../assets/account.png")}
          style={{
            width: 60,
            height: 60,
            margin: 10,
            marginTop: 30,
            marginRight: 30,
          }}
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold" }}>DD company</Text>
          <Text style={{ color: "gray", fontSize: 10 }}>
            Редактирование информации об учётной записи
          </Text>
        </View>
        <Image
          source={require("../../../assets/bricks/right_arrow.png")}
          style={{
            width: 30,
            height: 30,
            margin: 10,
            marginTop: 30,
            marginRight: 30,
          }}
        />
      </View>

      <Card style={{ margin: 10 }}>
        <Card.Title title="Сторонние голосовые сервисы" />
        <Card.Content
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/logos/google_assistant.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text style={{ width: 70, textAlign: "center" }}>
              Google Assistant
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logos/alexa.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text style={{ width: 70, textAlign: "center" }}>Alexa</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logos/smart_things.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text style={{ width: 90, textAlign: "center" }}>SmartThings</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
          <TouchableOpacity style={{ marginBottom: 18 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="home-outline"
                  size={24}
                  color={"black"}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ lineHeight: 26, alignSelf: "flex-start" }}>
                  Управление домом
                </Text>
              </View>
              <Image
                source={require("../../../assets/bricks/right_arrow.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 18 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="paper-plane-outline"
                  size={24}
                  color={"black"}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ lineHeight: 26, alignSelf: "flex-start" }}>
                  Центр сообщений
                </Text>
              </View>
              <Image
                source={require("../../../assets/bricks/right_arrow.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 8 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="help-circle-outline"
                  size={24}
                  color={"black"}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ lineHeight: 26, alignSelf: "flex-start" }}>
                  FAQ и обратная связь
                </Text>
              </View>
              <Image
                source={require("../../../assets/bricks/right_arrow.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", color: "red", opacity: 0.5 }}>
              Выход
            </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}

export default AccountPage;
