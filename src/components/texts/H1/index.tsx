import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const H1 = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(H1);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 31.25,
    fontWeight: '700',
    lineHeight: 46.88,
  },
});