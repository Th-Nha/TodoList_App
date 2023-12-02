import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login_screen from "./screen/login";
import { default as theme } from "./custom-theme.json";
import Home_screen from "./screen/home";
import User_Screen from "./screen/user";
import Todolist_Srceen from "./screen/todolist";

const Stack = createStackNavigator();
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login_screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home_screen}
            options={{ headerShown: false, }}
          />
           <Stack.Screen
            name="User"
            component={User_Screen}
            options={{ headerShown: false, }}
          />
           <Stack.Screen
            name="Todo list"
            component={Todolist_Srceen}
            options={{ headerShown: false, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
