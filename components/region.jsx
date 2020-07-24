import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Photo from './photo.jsx';

const Region = ({ onMapButtonPress, onRegionSearchClick, photoData, regionName }) => {
    const [searchedRegion, onSearchRegion] = React.useState('');
    console.log(searchedRegion)


    var mapPhotos = <View></View>
 
    if(photoData.length >= 1) {

            mapPhotos = 
                <View style={styles.photoRow }>
                     {photoData.map((photo, i) => 
                        <Photo  style={styles.photoRow} key={i} photo={photo} />
                    )}
                </View>
    }
    return (
        
        <ScrollView style={styles.container}>
            <View>

            <SearchBar style={styles.search} placeholder="Search for Region"
                value={searchedRegion} 
                onChangeText={text => onSearchRegion(text)}
            />
             <TouchableOpacity
                style={styles.searchButton}
                onPress={() => {onRegionSearchClick(searchedRegion)}}
            >
                    <Text>Search</Text>
                </TouchableOpacity>
            <View style={styles.heading}>
                
                <Text style={styles.regionTitle}>{regionName}</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() => {onMapButtonPress()}}
                ><Text style={styles.trailBtnTxt}>Map View</Text></TouchableOpacity>
            </View>
                </View>

                <ScrollView style={styles.photoColumn}>
            {mapPhotos}
            </ScrollView>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36454f',
        marginTop: -1,
        height: '100%'
    },
    trailBtnTxt: {
        fontSize: 20,
        textAlign: "center"
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        fontFamily: "Cochin",
        fontWeight: 'bold'
    },
    searchButton: {
        padding: 8,
        width: 100,
        marginTop: -50,
        marginRight: 15,

        alignSelf: 'flex-end',
        textAlign: 'center',
        backgroundColor: 'grey',
        borderRadius: 10
    },
    button: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'darkgreen',
        padding: 6,
        marginBottom: -20,
        marginRight: 15,
        width: 100,
        borderRadius: 10
    },
    search: {
        width: '80%'
    },
    regionTitle: {
        fontSize: 30,
        paddingTop: 35,
        paddingBottom: 10,
        marginRight: -200,
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


export default Region;