import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Body from "../../components/texts/Body";
import Title from "../../components/texts/Title";
import { styles } from "./styles";
import Welcome from "../../assets/images/welcome.svg"
import Arrow from "../../assets/icons/arrow.svg"

const WelcomeView = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.background} />
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <Body>Welcome to</Body>
          <Title>Socially</Title>
        </View>
        <View style={styles.image}>
          <Welcome />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={() => { console.log('click') }}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Start</Text>
              <Arrow />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeView;