import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import IconText from "../components/IconText";


const City = () => {
    const { imageLayout, CityName, countryName, cityText, populationText, populationWrapper, rowLayout, riseSetText, riseSetWrapper } = styles
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <Text style={[CityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText IconName={'user'} IconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText IconName={'sunrise'} IconColor={'white'} bodyText={'10:46:58am'} bodyTextStyles={riseSetText} />
                    <IconText IconName={'sunset'} IconColor={'white'} bodyText={'17:43:45pm'} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    CityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City