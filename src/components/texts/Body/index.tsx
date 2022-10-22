import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const Body = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(Body);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});