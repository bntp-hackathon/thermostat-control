import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

function OtherProductsPage() {
  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View style={{ marginBottom: 24 }}>
                <Text style={{ color: "gray" }}>
                  Example topic <Ionicons name="star" />{" "}
                </Text>
              </View>

              <Text style={{ fontSize: 18, fontWeight: "bold", width: 240 }}>
                Main description about company's product and future ideas
              </Text>
            </View>

            <Image
              source={require("../../../assets/bricks/placeholder.jpg")}
              style={{ height: 120, width: 90, borderRadius: 4, opacity: 0.9 }}
            />
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View style={{ marginBottom: 24 }}>
                <Text style={{ color: "gray" }}>
                  Example topic <Ionicons name="home" />{" "}
                </Text>
              </View>

              <Text style={{ fontSize: 18, fontWeight: "bold", width: 240 }}>
                Main description about company's product and future ideas
              </Text>
            </View>

            <Image
              source={require("../../../assets/bricks/placeholder1.jpg")}
              style={{ height: 120, width: 90, borderRadius: 4, opacity: 0.9 }}
            />
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View style={{ marginBottom: 24 }}>
                <Text style={{ color: "gray" }}>
                  Example topic <Ionicons name="umbrella" />{" "}
                </Text>
              </View>

              <Text style={{ fontSize: 18, fontWeight: "bold", width: 240 }}>
                Main description about company's product and future ideas
              </Text>
            </View>

            <Image
              source={require("../../../assets/bricks/placeholder2.jpg")}
              style={{ height: 120, width: 90, borderRadius: 4, opacity: 0.9 }}
            />
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}

export default OtherProductsPage;
