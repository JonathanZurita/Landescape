import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, TextInput } from 'react-native';
import Photo from './photo.jsx';

const Region = ({ onMapButtonPress }) => {

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.heading}>
                
                <Text style={styles.regionTitle}>Central Texas</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() => {onMapButtonPress()}}
                ><Text style={styles.trailBtnTxt}>Map View</Text></TouchableOpacity>
            </View>
        
            <View style={styles.photoContainer}>
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
            </View>
            <View style={styles.photoContainer}>
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
            </View>
            <View style={styles.photoContainer}>
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
            </View>
            <View style={styles.photoContainer}>
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
                <Photo style={styles.photo} 
                source={{uri: 'https://i.imgur.com/JtVQlGG.jpg'}}
                />
            </View>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36454f',
    },
    trailBtnTxt: {
        fontSize: 20,
        textAlign: "center"
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'darkgreen',
        padding: 20,
        width: 180,
        borderRadius: 10
    },
    regionTitle: {
        fontSize: 30,
        paddingTop: 35,
        paddingBottom: 10,
        textAlign: 'center',
        width: '100%',
        color: 'white' 
    },
    // regionDescription: {
    //     width: '90%',
    //     backgroundColor: 'white',
    //     padding: 15,
    //     marginBottom: 10,
    // },
    photoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
        
    },
    photoDescription: {
        fontSize: 15,
        textAlign: "center"
    }
});



export default Region;