import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36454f'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'rgb(255,255,255)'
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

const Login = () => {

        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Landescape</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <View style= {styles.btnContainer}>
            <TouchableOpacity
                style={styles.userBtn}
                onPress={()=> alert("Login Twerrkks")}
            >
                <Text style={styles.userBtnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.userBtn}
                onPress={()=> alert("Signup Twerrkks")}
            >
                <Text style={styles.userBtnTxt}>Signup</Text>
            </TouchableOpacity>
            </View>
        </View>
        )
}
export default Login;