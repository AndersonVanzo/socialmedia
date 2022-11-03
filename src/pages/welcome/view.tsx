import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Welcome from "../../assets/images/welcome.svg"
import Title from "../../components/texts/Title";
import Arrow from "../../assets/icons/arrow.svg"
import Body from "../../components/texts/Body";

const WelcomeView = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();

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
          <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={() => navigation.navigate('TabScreens')}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Start</Text>
              <Arrow />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeView;