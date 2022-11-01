import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../../../common/colors";
import Options from "../../../../assets/icons/options.svg";
import Tag from "./components/Tag";

const Post = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LinearGradient style={{ flex: 1 }} colors={['#00000066', '#00000011', 'transparent', 'transparent', '#00000011', '#00000066']}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={{ uri: 'https://imgflip.com/s/meme/Cute-Cat.jpg' }} style={styles.avatar} />
              <View style={styles.userData}>
                <Text style={styles.name}>Cat</Text>
                <Text style={styles.time}>2 hrs ago</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.headerRight}>
              <Options />
            </TouchableHighlight>
          </View>
          <Image source={{ uri: 'https://imgflip.com/s/meme/Cute-Cat.jpg' }} style={styles.image} resizeMode={'cover'} />
          <View style={styles.footer}>
            <Tag type={'like'} amount={5200} />
            <Tag type={'comment'} amount={1100} />
            <Tag type={'save'} amount={362} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

export default memo(Post);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  content: {
    borderRadius: 20,
    height: 300,
    width: "100%",
    elevation: 10,
    shadowColor: colors.gray,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    width: '100%',
    zIndex: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userData: {
    marginLeft: 8,
  },
  name: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
  },
  time: {
    color: colors.white_dark,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
  },
  headerRight: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 14,
  }
});