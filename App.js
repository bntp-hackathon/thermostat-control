import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationCompanent from '@react-navigation/native'
import Ionic from 'react-native-vector-icons'



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
