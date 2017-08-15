import {
    Text,
    StyleSheet
} from 'react-native';
import React from 'react';

const MyText = (props) => (
    <Text style={[styles.mainText, props.style]}>
        {props.children}
    </Text>
)

const styles = StyleSheet.create({
    mainText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    }
})

export default MyText;