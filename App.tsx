import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/tabs";

const App = () => {

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App