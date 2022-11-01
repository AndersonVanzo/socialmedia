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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 48,
    width: '100%',
  },
  listContent: {
    paddingBottom: 94,
  },
  separator: {
    height: 32,
  }
});