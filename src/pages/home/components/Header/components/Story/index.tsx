import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { colors } from "../../../../../../common/colors";

const Story = (): JSX.Element => {
  return (
    <TouchableHighlight style={styles.container}>
      <View style={[styles.status]}>
        <Image source={{ uri: 'https://imgflip.com/s/meme/Cute-Cat.jpg' }} style={styles.image} />
      </View>
    </TouchableHighlight>
  );
}

export default Story;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    height: 56,
    width: 56,
  },
  status: {
    borderColor: colors.primary,
    borderRadius: 28,
    borderWidth: 2,
    height: 56,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    width: 56,
    zIndex: 1,
  },
  statusViewed: {
    borderWidth: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});