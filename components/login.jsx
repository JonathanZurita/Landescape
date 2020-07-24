import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
const Login  =({ onSignupClick, onLoginClick }) => {

    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');

    const image = {uri: "https://landescape.s3.amazonaws.com/IMG_0681.JPG"};

    return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>

        <Text style={styles.welcome}>LandEscape</Text>
        <TextInput
            style={styles.input}
            name="username"
            value={username}
            placeholder="Username"
            onChangeText={text => onUsernameChange(text)}
        />
        <TextInput
            style={styles.input}
            name="password"
            value={password}
            onChangeText={text => onPasswordChange(text)}
            placeholder="Password"
            secureTextEntry
        />
        <View style= {styles.btnContainer}>
        <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {onLoginClick(username, password)}}
        >
            <Text style={styles.userBtnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.userBtn}
            onPress={()=> {onSignupClick()}}
        >
            <Text style={styles.userBtnTxt}>Signup</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'rgb(255,255,255)',
        paddingTop: 300,
        fontFamily: "Cochin",
    
        
    },
    input: {
        width: '80%',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "80%"
    },
    userBtn: {
        backgroundColor: "#36454f",
        padding: 15,
        width: "45%",

    },
    userBtnTxt: {
        fontSize: 15,
        textAlign: "center",
        color: 'white'
    }, 
    image: {
        width: 430,
        height: 950,
        alignItems: 'center'
      }
});

export default Login;