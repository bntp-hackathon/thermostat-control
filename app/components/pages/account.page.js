import { Image, Text, View } from "react-native";

function AccountPage() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
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
          <Text style={{ fontWeight: "bold" }}>User name</Text>
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
    </View>
  );
}

export default AccountPage;
