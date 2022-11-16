import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationCompanent from "@react-navigation/native";
import Ionic from "react-native-vector-icons";
import MainContainer from "./app/components/navigation";

export default function App() {
  return <MainContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
