import React from "react";
import {
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import UserData from "./components/UserData";
import Effects from "./components/Effects";
import Header from "./components/Header";
import Content from "./components/Content";

const ProfileView = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Effects />
      <Header />
      <View style={styles.content}>
        <UserData posts={35} followers={1552} following={128} />
        <Content />
      </View>
    </SafeAreaView>
  );
}

export default ProfileView;