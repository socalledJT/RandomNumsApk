import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import RandomNumberGenerator from "./components/NumsGenerator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RandomNumberGenerator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373A40",
    alignItems: "center",
    justifyContent: "center",
  },
});
