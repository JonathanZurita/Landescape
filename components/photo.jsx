import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Photo =() => {
  return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => alert('image pressed')}
        >
          <Image style={styles.photo} 
          source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
          />

        </TouchableOpacity>
        
        <Text style={styles.rank}>250 Upvotes</Text>
      </View>

  )
}

const styles = StyleSheet.create({
  photo: {
    height: 300
  },
  container: {
    width: '49%'
  },
  rank: {
    paddingTop: -10,
    color: 'white',
    backgroundColor: 'black'
  }
})

export default Photo;