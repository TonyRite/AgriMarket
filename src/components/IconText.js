import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const IconText = (props) => {
    const {IconName,IconColor,bodyText,bodyTextStyles} = props
    const {container,textTheme} = styles
    return (
        <View style={container}>
            <Icon name={IconName} size={50} color={IconColor} />
            <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 textTheme:{
    fontWeight:'bold'
 },
 container:{
    alignItems:'center'
 }
})

export default IconText