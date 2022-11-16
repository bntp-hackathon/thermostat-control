import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Pages
import HomePage from "./pages/home.page";
import ScenariosPage from "./pages/scenarios.page";
import AccountPage from "./pages/account.page";

//Screen names
const homeName = "Home";
const detailsName = "Details";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === accountName) {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomePage} />
      <Tab.Screen name={detailsName} component={ScenariosPage} />
      <Tab.Screen name={accountName} component={AccountPage} />
    </Tab.Navigator>
  );
}

export default MainContainer;
