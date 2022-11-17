import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login.page";
import Signup from "./pages/signup.page";

const GlobalStack = createStackNavigator();

function AuthRouter() {
    return (
        <NavigationContainer>
            <GlobalStack.Navigator>
                <GlobalStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <GlobalStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            </GlobalStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthRouter;
