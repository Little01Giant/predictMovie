import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Icon name="googleplus" size={40} color={"black"} />
        <Button
          onPress={() => navigation.navigate("Home", { name: "Jane" })}
          title="Sign up with Google"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  option: { display: "flex", width: "100%", alignItems: "center" },
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
