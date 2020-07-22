import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Photo from './components/photo.jsx';
import Login from './components/login.jsx';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  const [loggedIn, setLoggedIn] = useState(false);
  
  var userPage = <Text></Text>;
  
  if({loggedIn}=== true) {
   
    userPage = 

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
        <TextInput placeholder =  "YASSSSSSSSSS"
        style={{borderColor: 'black', padding: 8, borderWidth: 1, width: '60%'}}/>
  
        <Button 
          title="Change Text" 
          onPress={() => setOutputText('The text changed!')}
          color="#841584"
        />
        <StatusBar style="auto" />
      <View>
      <Photo/> 
      </View>
      
      </View>
  };

  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 400}}>
        <Login />
      </View>
      <View>
      {userPage}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    paddingTop: 200,
    backgroundColor: '#36454f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
