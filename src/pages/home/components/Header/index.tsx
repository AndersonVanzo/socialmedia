import React, { memo } from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import H2Bold from "../../../../components/texts/H2Bold";
import AddStory from "./components/AddStory";
import Story from "./components/Story";

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <H2Bold>Feed</H2Bold>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <Story />}
        ListHeaderComponent={<AddStory />}
        horizontal={true}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  list: {
    marginBottom: 28,
    marginHorizontal: -24,
    marginTop: 18,
  },
  listContent: {
    minWidth: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  separator: {
    width: 30,
  },
});