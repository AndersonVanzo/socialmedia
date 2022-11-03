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
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    height: 48,
    width: 48,
  },
  picContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 36,
    height: 98,
    justifyContent: 'center',
    marginBottom: 12,
    transform: [{
      rotate: '45deg',
    }],
    width: 98,
  },
  picContent: {
    alignItems: 'center',
    borderRadius: 36,
    height: 86,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 86,
  },
  pic: {
    height: 98,
    resizeMode: 'cover',
    transform: [{
      rotate: '-45deg',
    }],
    width: 98,
  },
});