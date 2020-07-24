import React, { Component } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import MapView from 'react-native-maps';

import Login from './components/login.jsx';
import Region from './components/region.jsx';
import Profile from './components/Profile.jsx';
import Register from './components/register.jsx';
import Trail from './components/trail.jsx';
import Axios from "axios";

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      loggedIn: false, //change to false later
      mapView: false,
      region: false, //toggle false later
      profile: false,
      loginView: true, //change back to true later
      signup: false,
      data: [],
      regionData: [],
      userPhotoData: [],
      regionPhotoData: [],
      regionName: "Central Texas"
    }
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onRegionSearchClick = this.onRegionSearchClick.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.getRegionPhotos = this.getRegionPhotos.bind(this);
    this.findRegionName = this.findRegionName.bind(this);
  };

  //searches for a region
  onRegionSearchClick = (searchedWord) => {
    console.log(searchedWord)
    var params = {data: searchedWord}
    Axios.get('http://localhost:7375/name', params)
    .then(res=> {
      this.setState({
        region: true,
        profile: false,
        loginView: false,
        signup: false,
        regionData: res.data.rows[0].name,
      })
    })
    .catch(err => {
      console.log('axios error getting region info: ', err)
    })
  }
  getPhotos = () => {

    Axios.get("http://localhost:7375/photos")
    .then(res => {
      console.log(res.data.rows)
      this.setState ({
        userPhotoData: res.data.rows
      })
    })
  
    .then(res => {
      setTimeout(()=> {
      this.setState({
        profile: true
      })}, 1000);
    })
    .catch(err =>{
      console.log(err, 'error getting user photos')
    })
  }

  getRegionPhotos = () => {

    Axios.get("http://localhost:7375/region")
    .then(res => {
      console.log(res.data.rows)
      this.setState ({
        regionPhotoData: res.data.rows
      })
    })
  
    .then(res => {
      setTimeout(()=> {
      this.setState({
        profile: false,
        region: true
      })}, 1000);
    })
    .catch(err =>{
      console.log(err, 'error getting user photos')
    })
  }


  //registers a user
  onRegisterClick(password, username, region, instagram, description,profileURL, posts, followers, following) {
    var data = {
      password: password,
      username: username,
      region: region,
      instagram: instagram,
      description: description,
      profileURL: profileURL,
      posts: posts,
      followers: followers,
      following: following
    }

    Axios.post('/register', data)
    .then(res=> { 
      console.log('you registered!')
      this.setState ({
        loggedIn: true,
        profile: false,
        signup: false
      })
    })
    .catch(err => {
      console.log('error registering: ', err)
    })
  };

  //signup button is clicked on login view

  onSignupBtnClick = () => {
    this.setState ({
      loginView: false,
      signup: true
    })
  }

  findRegionName = (data) => {
    Axios.get('/regionName', {data: data})
    .then(res=> {
      this.setState({
        region: true,
        profile: false,
        loginView: false,
        signup: false,
        regionName: res.data.rows[o].name
      })
    })
    .catch(err => {
      console.log('axios error getting region info: ', err)
    })

  }

  //if a user logs in, toggles the profile View and loggedIn affirmation, 
  //and untoggles everything else
  isLoggedIn = () => {
    this.setState({
      loggedIn: true,
      profile: true,
      mapView: false,
      region: false,
      signup: false,
      loginView: false
    })

    if(this.state.profile !== true) {
      if(this.state.userPhotoData.length === 0) {
        this.getPhotos();
      }
    }
  }
  regionButtonPress = () => {

    this.setState ({
      loggedIn: true,
      mapView: false,
      region: true,
      profile: false,
      signup: false,
      loginView: false
    })

    if(this.state.regionPhotoData.length === 0) {
      this.getRegionPhotos()
    }

  }
  //button to toggle map view
  mapButtonPressed = () => {
    this.setState ({
      mapView: true,
      loggedIn: true,
      region: false,
      profile: false,
      signup: false,
      loginView: false
    })
  }
  //logs the user in if they have the correct credentials
  onLoginClick = (username, password) => {
    if(username === 'Hello' && password === 'password') {
        console.log('success');
        this.isLoggedIn();
    }
  }
  render () {
    //initial variables are toggled off until login
    var map = <View></View>;
    var region = <View></View>;
    var login = <Login onLoginClick={this.onLoginClick} onSignupClick={this.onSignupBtnClick}/>;
    var profile = <View></View>
    var signup = <View></View>
    var header = <View></View>
  
    
    //if the map button is clicked, then we will toggle on the map view
    if(this.state.mapView === true) {
      login = <View></View>
      region= <View></View>
      map = 
          <View style={styles.map}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.regionButtonPress() }
                ><Text style={styles.trailBtnTxt}>Region View</Text></TouchableOpacity>
            <MapView style={styles.mapStyle} />
          </View>
    }
    //toggle off the login page
    if(this.state.loginView === false) {
      login = <View></View>
    }
    if(this.state.loggedIn === true) {
      header = <Header style={styles.heading}
      backgroundColor='rgb(1,14,22)'
      //backgroundImage={{ uri: 'https://landescape.s3.amazonaws.com/IMG_8779.JPG'}}
      leftComponent={{ icon: 'menu', color: '#fff', onPress: this.regionButtonPress   }}
      centerComponent={{ text: 'LandEscape', fontFamily: "Cochin",style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff', onPress: this.isLoggedIn }}
        />
    }

    //toggle the signup page
    if(this.state.signup === true) {
      signup = <Register register={this.onRegisterClick}/>
    }

    //if logged in or region button clicked, this will toggle on the region
    if(this.state.region === true) {
      login = <View></View>;
      map = <View></View>;
      region = 
      <View>
        <Region 
            onMapButtonPress={this.mapButtonPressed}
            onRegionSearchClick={this.findRegionName}
            photoData={this.state.regionPhotoData}
            regionName={this.state.regionName}
            />
      </View>
    };

    //toggles the profile page
    if(this.state.profile === true) {
      profile =
        <View>
          <Profile photoData={this.state.userPhotoData}/>
        </View>
    }

    return (
      <View style={styles.container}>
        {header}
        <View >{login}</View>
        {signup}
        {profile}
          {region}
        {map}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
  },

  mapStyle: {
    width: Dimensions.get('window').width - 20,
    height: (Dimensions.get('window').height) -400
  },
  map: {
    
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
