import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const RowText = (props) => {
    const { messageOneStyles, messageTwoStyles, containerStyles, messageOne, messageTwo } = props
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}


export default RowText