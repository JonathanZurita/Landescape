import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTh , faUser, faEye, faMapMarkerAlt, faCity, faUserCircle, faMountain, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import MapView, { Marker } from 'react-native-maps';
import PhotoView from './photo.jsx';
import fakeData from './fakeData.js';
//import Camera from './camrea.jsx';
import { BlurView } from 'expo-blur';


import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
const Profile = ({ }) =>{ 

    const [mapPhotos, setPhotos] = React.useState('');
    const [buttonColorLeft, setBtnColorLeft] = React.useState('rgba(255,255,255, .6)');
    const [buttonColorRight, setBtnColorRight] = React.useState('rgba(100,100,100, .6)');
    const [photoView, setPhotoView] = React.useState('');
    //const [cam, setCam] = React.useState('');
    const [data, setData] = React.useState(fakeData);
    const [mapData, setMapData] = React.useState([]);
    const [cordData, setCordData] = React.useState([])
    const [photoRegion, handlePhotoRegion] = React.useState('');
    const [backColor, setBackColor] = React.useState('rgba(0,0,0, .8)');

    const [region, setRegion] = useState({
        latitude: 30.266666,
        longitude: -97.733330,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    });
    var length = 20;
    var geoPhotos = null;
    var gridPhotos = null;

    React.useEffect(()=>{
    handleInitPhotoRender(gridPhotos)
    }, [gridPhotos]);

    const handleInitPhotoRender = (photos) => {
            setPhotos(photos);
            setBtnColorLeft('rgb(196, 202, 206)');
    }
    const handleBtnToggle = (side, color, pics) => {
        if(side === 'left') {
            setBtnColorLeft('grey');
            setBtnColorRight('white');
        } else {
            setBtnColorRight('grey');
            setBtnColorLeft('white');
        }
        setPhotos(pics);
        setPhotoView('');
    }

    const takePhoto = () => {
        setPhotos('');
        s//etCam(<Camera />);
    }

    const renderImageView = (photo) => {
        setBtnColorRight('grey');
        setBtnColorLeft('grey');
        setPhotos('');
        setPhotoView(<PhotoView unSplash={photo} />);
    }

    var coordinates = []
    var mapArr = []
    var geoArr = []
    var rowObj = {};
    var width = 138;
    var height = 118; 
    var rank = 1;
 
    if(data.length > 0) {

        for(var i = 0; i < data.length; i++) {

           

            var url = '';
            if(i === data.length - 1) {
                url = data[i - 1].urls.full
            } else {
                url = data[i + 1].urls.full
            }


            //push photo data into coordinates array to make map pins
            if(data[i].id === undefined) {
                data[i].id = 'agsgasagweged'
            }

            //add photos from data into the object
            rowObj.id = data[i].id;
            rowObj.url = data[i].urls.full;
            rowObj.profile = url;
            rowObj.photoObj = data[i]

            coordinates.push({
                rank: rank,
                lat: Number(Math.random(0,1) + 30).toFixed(6), 
                long: Number(Math.random(0, 1) - 98).toFixed(6), 
                url: data[i].urls.full, 
                photoObj: data[i]
            })
            rank++;

            for(var j = 0; j < data[i].tags.length; j++) {

                if(data[i].tags[j].source !== undefined) {

                    coordinates.push({
                        lat: Number(Math.random(0,1) + 30).toFixed(6), 
                        long: Number(Math.random(0, 1) - 98).toFixed(6), 
                        url: data[i].tags[j].source.cover_photo.urls.full, 
                        photoObj: data[i],
                        rank: rank
                    })
                    rank++;

                    rowObj.cover_photo = data[i].tags[j].source.cover_photo.urls.full
                    
                }
            }
            
            coordinates.push({
                lat: Number(Math.random(0,1) + 30).toFixed(6), 
                long: Number(Math.random(0, 1) - 98).toFixed(6), 
                url: url, 
                photoObj: data[i],
                rank: rank
            })
            rank++

            mapArr.push(rowObj);
            rowObj = {};
            //onsole.log(coordinates[0].lat, coordinates[0].long)
            if(i < 10) {
                geoArr.push(data[i]);
            }


            //console.log(fakeData.length)
            //console.log(i, data[i].urls.full)

            //gridRowArr.push(data[i]);
            //console.log(i, gridRowArr[0].id)
            //count = count + 1 ;
            //console.log(count)

        
            // if(count === 3) {
            //     count = 0;
            //     mapArr.push(gridRowArr);
            //     gridRowArr = [];
            //     //console.log(i)
            // } else if(i === data.length - 1) {
            //     //console.log(gridRowArr)
            //     const addNulls = () => {
            //         if(gridRowArr.length < 3) {
            //             gridRowArr.push({id: null, urls: {full: 'https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQzMzEwfQ'}})
            
            //             //console.log(gridRowArr[0].id)

            //             addNulls();

            //         } else {
            //             mapArr.push(gridRowArr)
            //         }
            //     }
            //     addNulls();
            // }
        }
        

        //console.log(mapArr[0][0].urls.full, mapArr[3][0].urls.full)
        //mapping an array where each index is an array with 4 objects.
        gridPhotos =
            <ScrollView style={styles.photoColumn}>
                {mapArr.map((photo, i) =>
                    <View key={photo.id} style={styles.photoRow } >
                        <TouchableOpacity  style={styles.imageContainer} onPress={() => renderImageView(photo.url)}>
                            <Image style={styles.photoTiles} source={{ uri: photo.url, width: width, height: height}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.imageContainer} onPress={() => renderImageView(photo.cover_photo)}>
                            <Image style={styles.photoTiles} source={{ uri: photo.cover_photo, width: width, height: height}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => renderImageView(photo.profile)}>
                            <Image style={styles.photoTiles} source={{ uri: photo.profile, width: width, height: height}}/>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        //setPhotos(gridPhotos);
        geoPhotos =  
            <MapView 
                style={styles.mapStyle}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
            > 
                {coordinates.map((marker, i)=> 

                    <Marker key={i}
                        onPress={() => renderImageView(marker.url)}
                        coordinate={{ latitude: Number(marker.lat), longitude: Number(marker.long) }}
                    
                    >
                        <Image
                            source={{ uri: marker.url, width: 30, height: 30}}                   
                        />
                        <View style={{backgroundColor: 'lightblue', marginTop: 6}}>
                            <Text style={{fontSize: 17, color: "black"}}>^{marker.rank}</Text>
                        </View>
                    </Marker>
                    
                )}
            
            </MapView>
    }
    if(mapData.length === 0) {
        setMapData(mapArr);
        setCordData(coordinates);
    }



    return (
        <View style={styles.container}>

            <View style={{backgroundColor: 'rgba(0,0,0, .93)', flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{
                        //backgroundColor: 'blue',  
                        justifyContent: 'center',
                        paddingRight: 65,
                        paddingLeft: 55,
                        paddingTop: 40,
                        paddingBottom: 18
                        
                    } }
                    //blurRadius={10}
                    activeOpacity={1}
                    onPress={() => handleBtnToggle('right','rgb(196, 202, 206)', geoPhotos)}
                >
                <FontAwesomeIcon 
                    style={{color: buttonColorRight}} size={25} icon={faMountain} 
                />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        //backgroundColor: 'red',  
                        justifyContent: 'center',
                        paddingRight: 2,
                        paddingLeft: 2,
                        paddingTop: 30,
                        paddingBottom: 28
                        
                    } }
                
                >
                    <Text style={{color: 'white', fontSize: 16, fontFamily: "Cochin"}}>Trail Less Traveled</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        justifyContent: 'center',
                        //backgroundColor: 'green',
                        paddingRight: 60,
                        paddingLeft: 50,
                        paddingTop: 40,
                        paddingBottom: 18
                        
                    }} 
                    activeOpacity={1}
                    onPress={() => handleBtnToggle('left', 'rgb(196, 202, 206)', gridPhotos)}
                ><FontAwesomeIcon 
                    size={25}
                    style={{color: buttonColorLeft}} icon={faUserCircle} 
                />
                </TouchableOpacity>
            </View>

            <View style={styles.countContainer}>
                    <TouchableOpacity style={{alignItems: 'center', alignSelf: 'center', paddingRight: 5}}>
                        <FontAwesomeIcon style={{color: 'white' }} icon={faEye} />
                        <Text style={{fontSize: 15, color: 'white', fontFamily: "Cochin"}}> 784  </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity  style={{paddingLeft: 5, paddingRight: 60, alignItems: 'center', alignSelf: 'center'}}>
                        <FontAwesomeIcon style={{color: 'white', fontSize: 'large'}} icon={faUser} />
                        <Text style={{fontSize: 15, color: 'white', fontFamily: "Cochin"}}> 876</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft: 60, marginLeft: 30, padding: 10, flexDirection: 'row'}}>
                        <FontAwesomeIcon 
                            size={20}
                            style={{color: 'white'}} icon={faCity} 
                        />
                                
                        <Text style={{paddingLeft: 5, textAlign: 'right', fontSize: 20, color: 'white', fontFamily: "Cochin"}}> Austin, TX</Text>
                    </TouchableOpacity>
            </View>  

            

                <View style={styles.bodyContainer} >
                    <ScrollView>
                        <View style={{height: 140}}></View>
                        {mapPhotos ?  mapPhotos : <View></View>}
                        <View style={{height: 90}}></View>
                    </ScrollView>

                    {photoView ? photoView : <View></View>}
                </View>

                    {/* /////////////////////////////////////////
                    /////////////////////////////////////////
                    ///////////////Bottom Buttons///////////
                    /////////////////////////////////////////
                    ///////////////////////////////////////// */}

                <BlurView intensity={100} tint={'dark'} style={styles.togglePicView}
                >
                    <TouchableOpacity 
                        style={{
                            //backgroundColor: 'rgba(0,0,0,.8)',  
                            //color: 'black',
                            justifyContent: 'center',
                            paddingRight: 65,
                            paddingLeft: 55,
                            paddingTop: 30,
                            paddingBottom: 28
                            
                        } }
                        //blurRadius={10}
                        activeOpacity={1}
                        onPress={() => handleBtnToggle('right','rgb(196, 202, 206)', gridPhotos)}
                    >
                    <FontAwesomeIcon 
                        style={{color: buttonColorLeft}} size={25} icon={faTh} 
                    />

                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{
                            backgroundColor: 'blue',  
                            //color: 'blue',
                            justifyContent: 'center',
                            paddingRight: 45,
                            paddingLeft: 45,
                            paddingTop: 15,
                            paddingBottom: 28
                            
                        }}
                        //onPress={() => takePhoto()}
                    
                    >

                    <FontAwesomeIcon 
                        style={{color: buttonColorLeft}} size={25} icon={faCameraRetro} 
                    />

                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            justifyContent: 'center',
                           // backgroundColor: 'rgba(0,0,0,.8)',
                            paddingRight: 60,
                            paddingLeft: 80,
                            paddingTop: 30,
                            paddingBottom: 28
                            
                        }} 
                        activeOpacity={1}
                        onPress={() => handleBtnToggle('left', 'rgb(196, 202, 206)', geoPhotos)}
                    ><FontAwesomeIcon 
                        size={25}
                        style={{color: buttonColorRight, fontSize: 'large'}} icon={faMapMarkerAlt} 
                    />
                    </TouchableOpacity>
                </BlurView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'rgb(0,0,0)',
    },
    togglePicView: {
        height: 90,
        marginTop: -85,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    regionName: {
        marginLeft: 20,
        fontFamily: "Cochin",
        fontSize: 20
    },
    photoTiles: {
        marginRight: .8,
        
        borderStartWidth: 0,
        borderColor: 'white'
    },
    countContainer: {
        backgroundColor: 'rgba(0,0,0, .93)',
        justifyContent: 'center',
        flexDirection: "row",
        fontSize: 15,
        paddingRight: 0,
        height: 55,
        zIndex: 2,
        //marginTop: -2,
        //height: 50
    },
    bodyContainer: {
        marginTop: -138,
        height: (Dimensions.get('window').height) ,
        overflow: "hidden",
        backgroundColor: 'rgb(0,0,0)',
        zIndex: -1
    },
    photoRow: {
        flexDirection: 'row',
        margin: .4
    },
    photoColumn: {
        flexDirection: 'column',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height) -20
    }
});