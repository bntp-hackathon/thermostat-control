import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-modern-datepicker';
import DialogContainer from 'react-native-dialog/lib/Container';
import DialogInput from "react-native-dialog/lib/Input";

function AddScenarioPage() {
    const [text, onChangeText] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [time, setTime] = useState('');
    const [visible, setVisible] = useState(false);

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            {/* <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}
            /> */}
            {/* <Text>В один клик</Text>
            <Text>Test</Text> */}
            <View style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
                <Pressable style={styles.buttonTime} onPress={() => setVisible(true)}>
                    <Text style={styles.text}>Время</Text>
                </Pressable>
                <DialogContainer visible={visible}>
                    <DatePicker
                        mode="time"
                        style={styles.time}
                        minuteInterval={3}
                        onTimeChange={(selectedTime) => {
                            setVisible(false);
                            setTime(selectedTime);
                        }}
                    />
                </DialogContainer>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grat',
        borderRadius: 10,
        padding: 10,
    },

    buttonTime: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    time: {
        height: 20,
    }
});

export default AddScenarioPage;