import React from "react"
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/currentWeather";
import Upcomingweather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather/> */}
      {/* <Upcomingweather /> */}
      <City/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App