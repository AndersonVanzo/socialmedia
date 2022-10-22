import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const BodyBold = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(BodyBold);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});