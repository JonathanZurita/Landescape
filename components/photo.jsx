import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';


const Photo =() => {
  return (

      <Image style={{width: "99%", height: 600}} 
      source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
      />

  )
}

export default Photo;