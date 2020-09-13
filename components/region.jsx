import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTh , faUser, faEye, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import PhotoView from './photo.jsx';

const Region = ({ onMapButtonPress, onRegionSearchClick, photoData, regionName }) => {
    const [searchedRegion, onSearchRegion] = React.useState('');
    const [buttonColorLeft, setBtnColorLeft] = React.useState('');
    const [buttonColorRight, setBtnColorRight] = React.useState('');
    const [photoView, setPhotoView] = React.useState('');
    //console.log(searchedRegion)

    var mapPhotos = <View></View>
    var length = 20;
    const handleBtnToggle = (side, color, pics) => {
        if(side === 'left') {
            setBtnColorLeft('black');
            setBtnColorRight(color);
        } else {
            setBtnColorRight('black');
            setBtnColorLeft(color);
        }
        setPhotos(pics);
        setPhotoView('');
    }
    const renderImageView = (photo) => {
        setBtnColorRight('black');
        setBtnColorLeft('black');
        setPhotoView(<PhotoView photo={photo} />);
    }
 
    if(photoData.length >= 1) {
        var count = 0;
        var mapArr = [];
        var gridRowArr = [];
        var width = 136;
        var height = 115;
        for(var i = 0; i < 60; i++) {
            gridRowArr.push(photoData[i]);
            count++;
            if(count === 2) {
                count = 0;
                mapArr.push(gridRowArr);
            }
        }
        //mapping an array where each index is an array with 4 objects.
        mapPhotos =
            <ScrollView style={styles.photoColumn}>
                {mapArr.map((photo, i) =>
                
                    <View style={styles.photoRow }>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => renderImageView(photo[0])}>
                            <Image style={styles.photoTiles} source={{ uri: photo[0].url, width: width, height: height}}/>
                            <Text style={styles.rank}>{photo[0].rank} ^</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => renderImageView(photo[1])}>
                            <Image style={styles.photoTiles} source={{ uri: photo[1].url, width: width, height: height}}/>
                            <Text style={styles.rank}>{photo[1].rank} ^</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => renderImageView(photo[2])}>
                            <Image style={styles.photoTiles} source={{ uri: photo[2].url, width: width, height: height}} />
                            <Text style={styles.rank}>{photo[2].rank} ^</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        
    }
    return (
        <View style={styles.wrapper}>
            {photoView ? photoView : <View></View>}
        <ScrollView style={styles.PhotosContainer}>
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
            {mapPhotos}
        </ScrollView>
        <View style={styles.togglePicView}>
        <TouchableOpacity 
        
            style={{
                backgroundColor: buttonColorLeft,  
                color: 'white',
                justifyContent: 'center',
                paddingRight: 100,
                paddingLeft: 95,
                paddingTop: 20,
                paddingBottom: 20
                
            } }
            onPress={() => handleBtnToggle('right','rgb(196, 202, 206)', gridPhotos)}
        >
        <FontAwesomeIcon 
            style={{color: 'white', fontSize: 32}} icon={faTh} 
        />

        </TouchableOpacity>
        <TouchableOpacity 
            style={{
                justifyContent: 'center',
                backgroundColor: buttonColorRight,
                paddingRight: 95,
                paddingLeft: 100,
                paddingTop: 20,
                paddingBottom: 20
                
            }} 
            onPress={() => handleBtnToggle('left', 'rgb(196, 202, 206)', geoPhotos)}
        ><FontAwesomeIcon 
            style={{color: 'white', fontSize: 'large'}} icon={faMapMarkerAlt} 
        />
        </TouchableOpacity>
    </View>
    </View>

    )
};

const styles = StyleSheet.create({
    wrapper: {
        height: (Dimensions.get('window').height) -100
    },
    PhotosContainer: {
        backgroundColor: 'black',
        marginTop: -1,
        height: (Dimensions.get('window').height) -380,
        
    },
    rank: {
        marginTop: -20,
        fontSize: 9,
        color: 'white',
        backgroundColor: 'rgba(1,1,1,0.6)'
    },
    photoRow: {
        flexDirection: 'row',
        margin: 1
    },
    photoColumn: {
        flexDirection: 'column',
    },
    photoTiles: {
        marginRight: 2
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
        width: '80%',
    },
    regionTitle: {
        fontSize: 30,
        paddingTop: 35,
        paddingBottom: 10,
        marginRight: -200,
        width: '100%',
        color: 'white' 
    },
    photoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    photoDescription: {
        fontSize: 15,
        textAlign: "center"
    },
    togglePicView: {
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: 'rgb(170, 1, 20)',
        borderTopWidth: 2
    }
});


export default Region;