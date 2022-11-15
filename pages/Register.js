import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

const Signs = [
  { icon: "googleplus", text: "Google" },
  { icon: "apple1", text: "Apple" },
];

const SignSection = ({ navigation }) => {
  return Signs.map((el) => {
    return (
      <View style={styles.option} key={el.text}>
        <Icon name={el.icon} size={30} color={"black"} />
        <Button
          onPress={() => navigation.navigate("Home", { name: "Jane" })}
          title={`Sign up with ${el.text}`}
        />
      </View>
    );
  });
};

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Predict</Text>
      <MaterialIcon name={"movie-roll"} size={100} style={styles.logo} />
      <SignSection navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 50,
    marginTop: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  option: {
    width: 300,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: "30",
    padding: 10,
    marginBottom: 10,
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
