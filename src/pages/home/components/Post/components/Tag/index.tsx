import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../../../../../common/colors";
import Comment from '../../../../../../assets/icons/comment.svg';
import Like from '../../../../../../assets/icons/like.svg';
import Save from '../../../../../../assets/icons/save.svg';

interface TagProps {
  type: 'like' | 'comment' | 'save';
  amount: number;
}

const Tag = ({ type, amount }: TagProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {type == 'like' && <Like />}
      {type == 'comment' && <Comment />}
      {type == 'save' && <Save />}
      <Text style={styles.amount}>{amount < 1000 ? amount : `${(amount / 1000).toFixed(1)}k`}</Text>
    </View>
  );
}

export default memo(Tag);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF77',
    borderRadius: 36,
    flex: .2,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  amount: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '400',
    marginLeft: 8,
  },
});