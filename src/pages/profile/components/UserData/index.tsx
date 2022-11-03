import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Body from "../../../../components/texts/Body";
import H2Bold from "../../../../components/texts/H2Bold";

interface UserDataProps {
  posts: number;
  followers: number;
  following: number;
}

const UserData = ({ posts, followers, following }: UserDataProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Body>Posts</Body>
        <H2Bold>{posts}</H2Bold>
      </View>
      <View style={styles.item}>
        <Body>Followers</Body>
        <H2Bold>{followers.toLocaleString('en')}</H2Bold>
      </View>
      <View style={styles.item}>
        <Body>Following</Body>
        <H2Bold>{following}</H2Bold>
      </View>
    </View>
  );
}

export default memo(UserData);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 64,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: .33,
  },
});