import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../common/colors';

const Caption = ({ children }: any): JSX.Element => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default memo(Caption);

const styles = StyleSheet.create({
  text: {
    color: colors.font_light,
    fontSize: 12.8,
    fontWeight: '400',
    lineHeight: 19.2,
  },
});