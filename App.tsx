import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeView from "./src/pages/welcome/view";
import HomeView from "./src/pages/home/view";
import ProfileView from "./src/pages/profile/view";
import MessagesView from "./src/pages/messages/view";

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Welcome'} component={WelcomeView} />
        <Stack.Screen name={'Home'} component={HomeView} />
        <Stack.Screen name={'Profile'} component={ProfileView} />
        <Stack.Screen name={'Messages'} component={MessagesView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;