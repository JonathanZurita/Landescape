import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
const Login  =({ onLoginClick }) => {

    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');

    return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Landescape</Text>
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
            //onPress={()=> alert("Signup Twerrkks")}
        >
            <Text style={styles.userBtnTxt}>Signup</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36454f',
        paddingTop: 200,
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'rgb(255,255,255)',
        paddingTop: -50
    },
    input: {
        width: '90%',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%"
    },
    userBtn: {
        backgroundColor: "darkgreen",
        padding: 15,
        width: "45%",

    },
    userBtnTxt: {
        fontSize: 15,
        textAlign: "center"
    }
});

export default Login;