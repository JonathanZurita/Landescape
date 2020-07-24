import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Register = ({ register }) => {
    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [region, onRegionChange] = React.useState('');
    const [instagram, onInstaChange] = React.useState('');
    const [description, onDescriptChange] = React.useState('');


    return (
        <View style={styles.container}>
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
                placeholder="Password"
                onChangeText={text => onPasswordChange(text)}
            />
            <TextInput
                style={styles.input}
                value={region}
                placeholder="Region"
                onChangeText={text => onRegionChange(text)}
            />
            <TextInput
                style={styles.input}
                name="instagram"
                value={instagram}
                placeholder="InstaURL"
                onChangeText={text => onInstaChange(text)}
            />
            <TextInput
                style={styles.input}
                name="description"
                value={description}
                placeholder="Describe your aesthetic"
                onChangeText={text => onDescriptChange(text)}
            />
            <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {register(password, username, region, instagram, description, "https://prrgetsearchbarfooter.s3.amazonaws.com/Tarcat.png", 'example', 1, 1)}}
            >
            <Text style={styles.userBtnTxt}>Signup</Text>
        </TouchableOpacity>

        </View>

    )

}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
    },
    button: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'hotpink',
      padding: 20,
      width: 180,
      borderRadius: 10,
      marginTop: 80,
      marginBottom: 20,
    },
    trailBtnTxt: {
      fontSize: 20,
      textAlign: "center"
    } 
  });