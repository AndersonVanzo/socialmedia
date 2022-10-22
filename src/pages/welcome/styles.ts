import { StyleSheet } from "react-native";
import { colors } from "../../common/colors";

export const styles = StyleSheet.create({
  container: {
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
    width: 680,
    height: 470,
    backgroundColor: colors.primary_light,
    borderRadius: 152,
  },
  backgroundContainer: {
    width: 793,
    height: 605,
    position: 'absolute',
    borderRadius: 152,
    transform: [{
      rotate: '-45deg',
    }],
    top: 0,
    left: -350,
    borderWidth: 1,
    borderColor: colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 255,
    height: 255,
    borderRadius: 87,
    borderWidth: 1,
    borderColor: colors.black,
    transform: [{
      rotate: '-45deg',
    }],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -35,
    bottom: -70,
  },
  button: {
    width: 236,
    height: 236,
    backgroundColor: colors.black,
    borderRadius: 79,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
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