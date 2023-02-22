import React from "react";

import login from "./Screens/login";
import signup from "./Screens/signup";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

function App(){
  return(
      <Stack.Navigator screenOptions={{HeaderShown: false}}>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={signup} />
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )

}