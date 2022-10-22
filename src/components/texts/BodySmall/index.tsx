import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const BodySmall = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(BodySmall);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
});