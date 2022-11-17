import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, TextInput } from "react-native-paper";
import { AuthContext } from "../../context/auth.context";

const LOGIN_URL = "https://thermostat-control-api.herokuapp.com/";

function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, display: "flex", alignContent: "center" }}>
      <Image
        source={require("../../../assets/login.png")}
        style={{ alignSelf: "center", marginTop: 30 }}
      ></Image>
      <Card style={{ margin: 10, backgroundColor: "white" }}>
        <Card.Content>
          <Text style={{ fontSize: 30, marginBottom: 20, fontWeight: "bold" }}>
            Login
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#F5F5F"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#F5F5F"
            value={password}
            onChangeText={setPassword}
          />
          <View style={{ display: "flex", flexDirection: "row" }}></View>
          <Pressable
            style={styles.button}
            onPress={() => login(email, password)}
          >
            <Text style={styles.text}>Log In</Text>
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
    backgroundColor: "transparent",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#8A2BE2",
    marginTop: 10,
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  signup: {
    fontSize: 15,
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#8A2BE2",
  },
});

export default Login;
