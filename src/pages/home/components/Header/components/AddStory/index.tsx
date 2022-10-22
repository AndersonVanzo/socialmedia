import React, { memo } from "react";
import {
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../../../../../common/colors";
import Add from '../../../../../../assets/icons/add_black.svg';

const AddStory = (): JSX.Element => {
  return (
    <TouchableHighlight style={styles.container}>
      <LinearGradient style={styles.gradient} colors={[colors.primary_light, colors.cream]}>
        <Add />
      </LinearGradient>
    </TouchableHighlight>
  );
}

export default memo(AddStory);

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    elevation: 10,
    height: 56,
    marginRight: 30,
    shadowColor: colors.gray,
    width: 56,
  },
  gradient: {
    alignItems: 'center',
    borderRadius: 28,
    flex: 1,
    justifyContent: 'center',
  },
});