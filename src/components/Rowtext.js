import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const RowText = (props) => {
    const {messageOneStyles,messageTwoStyles,containerStyles} = styles
    return (
        <View style={containerStyles}>
        <Text style={messageOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    alignItems:'center'
 }
})

export default RowText