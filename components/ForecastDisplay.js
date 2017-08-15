import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'

import MyText from './MyText'

class ForecastDisplay extends Component {

    render() {
        return (
            <View>
                <MyText>{this.props.forecast.main}</MyText>
                <MyText>{this.props.forecast.description}</MyText>
                <MyText>{this.props.forecast.temp}</MyText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    }
})

const mapStateToProps = (state) => {
    return {
        forecast: state.forecast
    }
}

export default connect(mapStateToProps, null)(ForecastDisplay);
