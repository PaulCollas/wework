import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

class LauncherPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{
              resizeMode: "center",
              height: 500,
              width: 1000
            }}
            source={require("./images/logo-app.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#091833",
  }
});

export default LauncherPage;