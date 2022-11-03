import { StyleSheet } from "react-native";
import { colors } from "../../common/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  title: {
    alignItems: 'center',
    marginVertical: 56,
  },
  image: {
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.primary_light,
    borderRadius: 152,
    height: 470,
    width: 680,
  },
  backgroundContainer: {
    alignItems: 'center',
    borderColor: colors.cream,
    borderRadius: 152,
    borderWidth: 1,
    height: 605,
    justifyContent: 'center',
    left: -420,
    position: 'absolute',
    top: 0,
    transform: [{
      rotate: '-45deg',
    }],
    width: 793,
  },
  buttonContainer: {
    alignItems: 'center',
    borderColor: colors.black,
    borderRadius: 87,
    borderWidth: 1,
    bottom: -70,
    height: 255,
    justifyContent: 'center',
    position: 'absolute',
    right: -35,
    transform: [{
      rotate: '-45deg',
    }],
    width: 255,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 79,
    height: 236,
    justifyContent: 'center',
    width: 236,
  },
  buttonContent: {
    alignItems: 'center',
    flexDirection: 'row',
    transform: [{
      rotate: '45deg',
    }],
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '400',
    marginRight: 15,
  },
});