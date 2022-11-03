import React, { memo } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import H2Bold from "../../../../components/texts/H2Bold";
import Body from "../../../../components/texts/Body";

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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
    width: '100%',
  },
  item: {
    alignItems: 'center',
    flex: .33,
    justifyContent: 'center',
  },
});