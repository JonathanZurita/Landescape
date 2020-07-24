import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Photo =({ photo }) => {
  var source = photo.url;

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={() => alert('image pressed')}>
          <Image source={{ uri: source, width: 400, height: 200}}/>
            <View style={styles.textWrap}>
                <Text style={styles.text}>RANK: {photo.rank} </Text>
                <Text style={styles.text}>Description: {photo.description} </Text>
                <View style={styles.row}>
                  <Text style={styles.text}>TIME: {photo.time}</Text>
                  <Text style={styles.text}>DATE: {photo.date}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>{photo.trail_id}</Text>
                  <Text style={styles.text}>SEASON:{photo.season}</Text>
                  <Text style={styles.text}>Tags: {photo.tags}</Text>
                </View>
            </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    //height: 300,

  },
  text: {
    color: 'white'
  },
  imageContainer: {
    paddingLeft: 10,
    paddingTop: 10,
    alignContent: 'stretch'
  },
  container: {
    //width: '120%'
    alignContent: 'stretch'
  },
  rank: {
    paddingTop: -10,
    color: 'white',
    backgroundColor: 'black'
  },
  textWrap: {
    backgroundColor: 'black',
    width: '99%'
  },
  text: {
    paddingRight: 20,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
  }
})

export default Photo;
