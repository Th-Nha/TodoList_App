import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import User_Screen from "../user";
import Todolist_Srceen from "../todolist";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="USER" />
    <BottomNavigationTab title="TODO LIST" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="User" component={User_Screen} />
    <Screen name="Todo List" component={Todolist_Srceen} />
  </Navigator>
);

const Home_screen = () => {
  return <TabNavigator />;
};

export default Home_screen;
