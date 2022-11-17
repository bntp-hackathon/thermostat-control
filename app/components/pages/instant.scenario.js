import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-paper";

function InstantScenario() {
    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text style={{ fontSize: 20 }}>Если</Text>
                    <Text>Коснитесь для запуска</Text>
                </Card.Content>
            </Card>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text style={{ fontSize: 20 }}>Тогда</Text>
                    <TouchableOpacity>
                        <Text>Добавить задачу</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    )
}

export default InstantScenario;