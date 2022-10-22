import React, { Fragment } from "react";
import {
  FlatList,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import BodyBold from "../../components/texts/BodyBold";
import Effects from "./components/Effects";
import Header from "./components/Header";

const HomeView = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Effects />
      <View style={styles.content}>
        <View style={styles.header}>
          <BodyBold>Socially</BodyBold>
        </View>
        <FlatList
          data={[]}
          renderItem={() => <Fragment />}
          ListHeaderComponent={<Header />}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeView;