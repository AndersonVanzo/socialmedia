import React, { Fragment, memo } from "react";
import { StyleSheet, View } from "react-native";
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
    width: 460,
    height: 460,
    backgroundColor: colors.primary_light,
    borderRadius: 152,
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 230,
    }],
    position: 'absolute',
    left: '-50%',
  },
  effect2: {
    width: 490,
    height: 490,
    borderColor: colors.cream,
    borderWidth: 1,
    borderRadius: 162,
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 215,
    }],
    position: 'absolute',
    left: '-50%',
  },
  effect3: {
    width: 520,
    height: 520,
    borderColor: colors.cream,
    borderWidth: 1,
    borderRadius: 172,
    transform: [{
      rotate: '-45deg',
    }, {
      translateX: 200,
    }],
    position: 'absolute',
    left: '-50%',
  },
});