import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const H2Bold = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(H2Bold);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 37.5,
  },
});