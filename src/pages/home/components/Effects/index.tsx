import React, { Fragment, memo } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../../../common/colors";

const Effects = (): JSX.Element => {
  return (
    <Fragment>
      <View style={styles.effect1} />
      <View style={styles.effect2} />
      <View style={styles.effect3} />
    </Fragment>
  );
}

export default memo(Effects);

const styles = StyleSheet.create({
  effect1: {
    backgroundColor: colors.primary_light,
    borderRadius: 152,
    height: 470,
    left: -500,
    position: 'absolute',
    top: 100,
    transform: [{
      rotate: '-45deg',
    }],
    width: 680,
  },
  effect2: {
    borderColor: colors.white,
    borderRadius: 152,
    borderWidth: 1,
    height: 565,
    left: -420,
    position: 'absolute',
    transform: [{
      rotate: '-45deg',
    }],
    top: 20,
    width: 500,
  },
  effect3: {
    borderColor: colors.white,
    borderRadius: 152,
    borderWidth: 1,
    height: 537,
    left: -440,
    position: 'absolute',
    transform: [{
      rotate: '-45deg',
    }],
    top: 100,
    width: 450,
  },
});