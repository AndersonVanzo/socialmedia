import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const H3 = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(H3);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
  },
});