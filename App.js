import React, { Component } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Login from './components/login.jsx';
import Region from './components/region.jsx';
import Trail from './components/trail.jsx';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      loggedIn: false,
      mapView: false,
      region: false
    }
  };
 
  isLoggedIn () {
    this.setState ({
      loggedIn: true,
      mapView: false,
      region: true
    })
  }

  mapButtonPressed = () => {
    this.setState ({
      mapView: true,
      loggedIn: false,
      region: false
    })
  }
  onLoginClick = (username, password) => {
    if(username === 'Hello' && password === 'password') {
        console.log('success');
        this.setState ({
          loggedIn: true,
          region: true
        })
    }
}
  render () {
    //initial variables are toggled off until login
    var userPage = <Text></Text>;
    var map = <View></View>;
    var region = <View></View>;
    var login = <Login onLoginClick={this.onLoginClick}/>;
    
    //if the map button is clicked, then we will toggle on the map view
    if(this.state.mapView === true) {
      login = <View></View>
      region= <View></View>
      map = 
          <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.onLoginClick('Hello', 'password')}
                ><Text style={styles.trailBtnTxt}>Region View</Text></TouchableOpacity>
            <MapView style={styles.mapStyle} />
          </View>
    }

    //if logged in or region button clicked, this will toggle on the region
    if(this.state.region === true) {
      login = <View></View>;
      map = <View></View>;
      userPage = 
      <View>
        <Region onMapButtonPress={this.mapButtonPressed}/>
      </View>
    };

    return (
      <View style={styles.container}>
        <View >
          {login}
        </View>
        <View>
        {userPage}
        </View>
          {region}
        <View>
          {map}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 10,
    backgroundColor: '#36454f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    paddingTop: 50,
    width: Dimensions.get('window').width - 20,
    height: (Dimensions.get('window').height) -70,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'hotpink',
    padding: 20,
    width: 180,
    borderRadius: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  trailBtnTxt: {
    fontSize: 20,
    textAlign: "center"
  } 
});
