import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../../common/colors";
import H2Bold from "../../../../components/texts/H2Bold";
import Body from "../../../../components/texts/Body";
import Back from '../../../../assets/icons/back.svg';

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.75} style={styles.backButton}>
        <Back />
      </TouchableOpacity>
    <View style={styles.headerContent}>
      <View style={styles.picContainer}>
        <View style={styles.picContent}>
          <Image source={{ uri: 'https://imgflip.com/s/meme/Cute-Cat.jpg' }} style={styles.pic} />
        </View>
      </View>
      <H2Bold>Cat</H2Bold>
      <Body>@cat</Body>
    </View>
    </View>
  );
}

export default memo(Header);

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 48,
    height: 48,
  },
  picContainer: {
    width: 98,
    height: 98,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 36,
    transform: [{
      rotate: '45deg',
    }],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  picContent: {
    width: 86,
    height: 86,
    overflow: 'hidden',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    transform: [{
      rotate: '-45deg',
    }],
    resizeMode: 'cover',
    width: 98,
    height: 98,
  },
});