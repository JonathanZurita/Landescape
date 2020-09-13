import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTh , faUser, faEye, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import photos from './fakeDBData.js';
// import { PanoramaView } from 'react-native-360';

import Messages from './Messages.jsx';


const Photo =({ unSplash }) => {
  var source = unSplash;
  const[photo, setPhoto] = React.useState(photos[0]);
  const [rank, handleRankAdd] = React.useState(photo.rank);
  const [likedPhoto, handleLikedPhoto] = React.useState(false);
  const [heartColor, handleHeartColor] = React.useState('white');
  const [height, setHeight] = React.useState(650);
  const [width, setWidth] = React.useState(1000);

  const addToRank = () => {
    if(likedPhoto === false) {
      photo.rank = Number(photo.rank) + 1;
      var newRank = photo.rank;
      handleLikedPhoto(true)
      handleHeartColor('red')
      handleRankAdd(newRank)
    } else {
      photo.rank = Number(photo.rank) - 1;
      handleHeartColor('white')
      handleLikedPhoto(false)
    }
  }

  const handleImgSize = () => {
    console.log('shwinnfgg')
    if(width > 500) {
      setHeight(248);
      setWidth(414);
    } else {
      setHeight(650);
      setWidth(1000);
    }

  }

  return (
      <ScrollView style={styles.container} >
        <ScrollView 
          style={{
            height: height,
            paddingBottom: 0,
          }} 
          horizontal={true} 
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => handleImgSize()}
          >
          <Image 
            style={styles.image} 
            source={{ uri: source, width: width, height: height}}
            
          />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.rank}>
        <Button
          onPress={()=> addToRank()}
          type='clear'
          style={{color: 'clear', width: 20, marginRight: 5}}
          icon={
            <Text>
              <FontAwesomeIcon 
                style={{color: heartColor}} 
                icon={faHeart}
              />
            </Text>  
          }
          title=''
        /> 
        <Text style={styles.text}> {photo.rank} </Text>
        </View>   
        <View style={styles.seasonAndTags}> 
          <Text style={styles.text}>Description: {photo.description} </Text>
          <Text style={styles.text}>TIME: {photo.time}</Text>
          <Text style={styles.text}>DATE: {photo.date}</Text>
        </View>
        <View style={styles.seasonAndTags}>
          <Text style={styles.text}>{photo.trail_id}</Text>
          <Text style={styles.text}>SEASON:{photo.season}</Text>
          <Text style={styles.text}>Tags: {photo.tags}</Text>
        </View>
        <Messages />
        <View style={{marginBottom: 90}}>

        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  photo: {

  },
  text: {
    color: 'white',
    width: 300
  },
  container: {
    //alignContent: 'stretch'
    backgroundColor: 'rgb(0,0,0)',
    marginTop: -45
    
  },
  rank: {
    flexDirection: 'row',
    paddingTop: -10,
    color: 'white',
    backgroundColor: 'black',
    borderTopColor: 'rgb(60,60,60)',
    borderTopWidth: 1
  },
  rankAndPhotoInfo: {
    //marginTop: -30,
    backgroundColor: 'black',
    
    justifyContent: 'center',
    //marginBottom: 50,
    position: 'relative'
  },
  text: {
    justifyContent: 'center',
    //paddingRight: 20,
    color: 'white',
    padding : 5
  },
  seasonAndTags: {
    flexDirection: 'row',
  },
  image: {
    zIndex: 2
  }
})

export default Photo;
