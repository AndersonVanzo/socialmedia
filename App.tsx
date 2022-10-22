import React from "react";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/common/colors";

import WelcomeView from "./src/pages/welcome/view";
import HomeView from "./src/pages/home/view";
import ProfileView from "./src/pages/profile/view";
import MessagesView from "./src/pages/messages/view";

import Home from './src/assets/icons/home.svg';
import Messages from './src/assets/icons/messages.svg';
import Profile from './src/assets/icons/profile.svg';
import Favorites from './src/assets/icons/favorites.svg';
import PostView from "./src/pages/post/view";
import Button from "./src/components/Button";

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<RootTabParamList>();

  const TabScreens = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const options: BottomTabNavigationOptions = {
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0,
        height: 64,
        elevation: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    }

    return (
      <Tab.Navigator initialRouteName={'Home'} screenOptions={options}>
        <Tab.Screen
          name={'Home'}
          component={HomeView}
          options={{ tabBarIcon: ({ focused }) => <Home color={focused ? colors.iconSelected : colors.icon} /> }}
        />
        <Tab.Screen
          name={'Messages'}
          component={MessagesView}
          options={{ tabBarIcon: ({ focused }) => <Messages color={focused ? colors.iconSelected : colors.icon} /> }}
        />
        <Tab.Screen
          name={'PostTab'}
          component={NewPostScreen}
          options={{ tabBarIcon: () => <Button icon={'add'} action={() => navigation.navigate('Post')} style={{ marginBottom: 38 }} /> }}
        />
        <Tab.Screen
          name={'Favorites'}
          component={MessagesView}
          options={{ tabBarIcon: ({ focused }) => <Favorites color={focused ? colors.iconSelected : colors.icon} /> }}
        />
        <Tab.Screen
          name={'Profile'}
          component={ProfileView}
          options={{ tabBarIcon: ({ focused }) => <Profile color={focused ? colors.iconSelected : colors.icon} /> }}
        />
      </Tab.Navigator>
    );
  }

  const NewPostScreen = (): JSX.Element => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'PostTab'} component={PostView} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'TabScreens'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Welcome'} component={WelcomeView} />
        <Stack.Screen name={'Post'} component={PostView} />
        <Stack.Screen name={'TabScreens'} component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;