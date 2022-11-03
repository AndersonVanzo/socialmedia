import React, { memo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Posts from '../../../../assets/icons/posts.svg';
import Save from '../../../../assets/icons/save_black.svg';
import { colors } from "../../../../common/colors";
import Body from "../../../../components/texts/Body";

interface ContentProps {

}

type ContentOptions = 'posts' | 'saved';

const Content = ({ }: ContentProps): JSX.Element => {
  const [selected, setSelected] = useState<ContentOptions>('posts');

  const EmptyComponent = (): JSX.Element => (
    <View style={styles.emptyContent}>
      <Body>Nada para mostrar aqui</Body>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.75} style={styles.headerButton} onPress={() => setSelected('posts')}>
          <Posts />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75} style={styles.headerButton} onPress={() => setSelected('saved')}>
          <Save />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[]}
        renderItem={() => <View />}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

export default (Content);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 20,
  },
  headerButton: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  content: {
    flex: 1,
    paddingBottom: 80,
  },
  emptyContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});