import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is register page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "Jane" })}
      />
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
