import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AddDevicePage from "./pages/add-device.page";
import HomePage from "./pages/home.page";
import MainContainer from "./navigation";
import AddScenarioPage from "./pages/add-scenario.page";

const GlobalStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <GlobalStack.Navigator>
        <GlobalStack.Screen
          name="Home"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <GlobalStack.Screen name="Add scenario" component={AddScenarioPage} />
        <GlobalStack.Screen name="Add device" component={AddDevicePage} />
      </GlobalStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
