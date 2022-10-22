import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const H2Regular = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(H2Regular);

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 37.5,
  },
});