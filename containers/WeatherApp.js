import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import MyText from '../components/MyText'
import ZipCodeFilter from '../components/ZipCodeFilter';
import ForecastDisplay from '../components/ForecastDisplay';
import { connect } from 'react-redux'

class WeatherApp extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <Image source={require('../img/background.png')}
          resizeMode='cover'
          style={styles.backdrop}>
          <View style={styles.overlay} >

            <View style={styles.row}>
              <MyText>Current weather for: </MyText>
              <ZipCodeFilter/>
            </View>
            <MyText style={styles.paddingAround}>{ this.props.loading ? 'Searching...' : ''}</MyText>
            <ForecastDisplay/>

          </View>
        </Image>
      </View >


    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(WeatherApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'white',

  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'stretch'
  },
  overlay: {
    paddingTop: 80,
    paddingBottom: 70,
    backgroundColor: '#000000',
    opacity: 0.6,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  paddingAround: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});
