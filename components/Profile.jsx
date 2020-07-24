import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Photo from './photo.jsx';
const Profile = ({ photoData }) => {
    var mapPhotos = <View></View>
 
    if(photoData.length >= 1) {

            mapPhotos = 
                <View style={styles.photoRow }>
                     {photoData.map((photo, i) => 
                        <Photo  style={styles.photoRow } key={i} photo={photo} />
                    )}
                </View>
    }
    return (
        <View style={styles.container}>
            <View style={styles.topInfo}>
                <Text style={styles.header}>
                    Trail_Less_Traveled
                </Text>
                <Text style={{color: 'white', fontFamily: "Cochin"}}>
                    Home: Austin
                </Text>
           
            <View style={styles.countContainer}>
                <Text style={{color: 'white', fontFamily: "Cochin"}}>Eyes: 784</Text>
                <Text style={{color: 'white', fontFamily: "Cochin"}}>Inspos: 876</Text>
            </View>
            </View>
            <ScrollView style={styles.photoColumn}>
                {mapPhotos}
           </ScrollView>
        </View>

    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36454f',
        marginTop: -1,
    },
    header: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        marginBottom: -10,
        color: 'white',
        fontFamily: "Cochin",
        fontWeight: 'bold'
    },
    countContainer: {
        alignItems: 'flex-end',
        marginTop: -30,
        color: 'white',
        paddingRight: 2,
        paddingBottom: 2
    },
    topInfo: {
        backgroundColor: 'rgb(1,14,22)',
        color: 'white',
    },
    photoRow: {
       // flexDirection: 'row'
       //flexDirection: "row"
    },
    photoColumn: {
        //flexDirection: 'column'
        alignContent: "stretch"
    }
});