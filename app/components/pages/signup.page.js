import { StyleSheet, View, Pressable, Text, Image, TouchableOpacity } from "react-native";
import { Card, TextInput } from "react-native-paper";

function Signup({ navigation }) {
    return (
        <View style={{ flex: 1, display: "flex", alignContent: "center" }}>
            <Image source={require("../../../assets/signup.png")}
                style={{ alignSelf: "center", marginTop: 30 }}></Image>
            <Card style={{ margin: 10, backgroundColor: "white" }}>
                <Card.Content>
                    <Text style={{ fontSize: 30, marginBottom: 20, fontWeight: "bold" }}>Sign up</Text>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#F5F5F" />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor="#F5F5F" />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Password again" placeholderTextColor="#F5F5F" />
                    <View style={{ display: "flex", flexDirection: "row" }}>
                    </View>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Sign up</Text>
                    </Pressable>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.signup}>Log in</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        backgroundColor: 'transparent',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#8A2BE2',
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
        color: "#8A2BE2"
    }
});

export default Signup;