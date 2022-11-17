import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

function AddScenarioPage({ navigation }) {
    return (
        <View style={{ padding: 10 }}>
            <Card style={{ marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                        source={require("../../../assets/bricks/touch.png")}
                        style={{
                            width: 30,
                            height: 60,
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 5
                        }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Instant scenario")}>
                        <Card.Content
                            style={styles.cardContent}>
                            <Text style={styles.title}>Мгновенный сценарий</Text>
                            <Text style={styles.content}>Пример: выключение всех светильников в спальне одним касанием</Text>
                        </Card.Content>
                    </TouchableOpacity>

                    <Image
                        source={require("../../../assets/bricks/right_arrow.png")}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 25,
                            marginRight: 5
                        }} />
                </View>
            </Card>
            <Card style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/bricks/sun.png")}
                        style={{
                            width: 30,
                            height: 60,
                            marginTop: 5,
                            marginLeft: 20,
                            marginRight: 5
                        }} >
                    </Image>
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.title}>При изменении погодных условий</Text>
                        <Text style={styles.content}>Пример: когда температура превысит 28C</Text>
                    </Card.Content>
                    <Image
                        source={require("../../../assets/bricks/right_arrow.png")}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 20,
                            marginRight: 5
                        }} />
                </View>
            </Card>
            <Card style={{ borderRadius: 0 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/bricks/light.png")}
                        style={{
                            width: 30,
                            height: 60,
                            marginTop: 5,
                            marginLeft: 20,
                            marginRight: 5
                        }} />
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.title}>При изменении место положения</Text>
                        <Text style={styles.content}>Пример: после того, как выйдите из дома</Text>
                    </Card.Content>
                    <Image
                        source={require("../../../assets/bricks/right_arrow.png")}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 18,
                            marginRight: 5
                        }} />
                </View>
            </Card>
            <Card style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/bricks/clock.png")}
                        style={{
                            width: 30,
                            height: 50,
                            marginTop: 8,
                            marginLeft: 20,
                            marginRight: 5
                        }} />
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.title}>Таймер</Text>
                        <Text style={styles.content}>Пример: каждое утро в 7:00</Text>
                    </Card.Content>
                    <Image
                        source={require("../../../assets/bricks/right_arrow.png")}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 17,
                            marginRight: 5
                        }} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContent: {
        width: 305,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
    },

    title: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 10,
    },

    content: {
        fontSize: 12,
        color: "gray",
    }
})

export default AddScenarioPage;