import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export { }

declare global {
  type RootStackParamList = {
    Welcome: undefined;
    Post: undefined;
    PostTab2: undefined;
    TabScreens: undefined;
  }

  type RootTabParamList = {
    Home: undefined;
    Messages: undefined;
    PostTab: undefined;
    Favorites: undefined;
    Profile: undefined;
  }

  type NavigationProps = NativeStackNavigatorProps<RootStackParamList>;
}