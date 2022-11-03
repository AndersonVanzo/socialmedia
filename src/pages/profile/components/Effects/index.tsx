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
    height: 460,
    left: '-50%',
    position: 'absolute',
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 230,
    }],
    width: 460,
  },
  effect2: {
    borderColor: colors.cream,
    borderRadius: 162,
    borderWidth: 1,
    height: 490,
    left: '-50%',
    position: 'absolute',
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 215,
    }],
    width: 490,
  },
  effect3: {
    borderColor: colors.cream,
    borderRadius: 172,
    borderWidth: 1,
    height: 520,
    left: '-50%',
    position: 'absolute',
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 200,
    }],
    width: 520,
  },
});