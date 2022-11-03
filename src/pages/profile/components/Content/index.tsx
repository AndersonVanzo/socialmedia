import React, { memo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Posts from '../../../../assets/icons/posts.svg';
import Save from '../../../../assets/icons/save_black.svg';
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

export default memo(Content);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '100%',
  },
  headerButton: {
    alignItems: 'center',
    flex: .5,
    height: 48,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingBottom: 80,
  },
  emptyContent: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});