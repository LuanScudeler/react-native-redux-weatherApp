import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { connect } from 'react-redux'
import { submitZipCode } from '../actions/weatherActions'

class ZipCodeFilter extends Component {

    render() {
        return (
            <View style={style.zipCodeContainer}>
                <TextInput style={style.zipCodeInput}
                    onSubmitEditing={(event) => this.props.onSubmitZipCode(event)} />
            </View>
        );
    }
}

var style = StyleSheet.create({
    zipCodeContainer: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: -2.5
    },
    zipCodeInput: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17,
        width: 80,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitZipCode: (event) => {
            dispatch(submitZipCode(event.nativeEvent.text))
        }
    }
}

export default connect(null, mapDispatchToProps)(ZipCodeFilter);
