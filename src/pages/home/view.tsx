import React from "react";
import {
  FlatList,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import BodyBold from "../../components/texts/BodyBold";
import Effects from "./components/Effects";
import Header from "./components/Header";
import Post from "./components/Post";
import Notification from "../../assets/icons/notification.svg";

const HomeView = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Effects />
      <View style={styles.content}>
        <View style={styles.header}>
          <BodyBold>Socially</BodyBold>
          <Notification />
        </View>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <Post />}
          ListHeaderComponent={<Header />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeView;