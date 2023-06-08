import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItems";

const DATA = [
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2022-08-30 15:00:01",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2022-08-30 15:00:02",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
]


const Upcomingweather = () => {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    const {container,image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming.jpg')} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})

export default Upcomingweather