import React, { memo } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../common/colors";
import Send from '../../assets/icons/send.svg';
import Add from '../../assets/icons/add.svg';

interface ButtonProps {
  icon: 'send' | 'add';
  action: () => void;
  label?: string;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ icon, action, label, style }: ButtonProps): JSX.Element => {
  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={() => action()}
      activeOpacity={0.75}
      accessibilityLabel={label}>
      <View style={styles.revert}>
        {icon == 'send' ? <Send /> : <Add />}
      </View>
    </TouchableHighlight>
  );
}

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 23,
    elevation: 5,
    height: 60,
    justifyContent: 'center',
    transform: [{
      rotate: '45deg',
    }],
    width: 60,
  },
  revert: {
    transform: [{
      rotate: '-45deg',
    }],
  }
});