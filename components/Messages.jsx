import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const Messages = () => {
    const [value, onChangeText] = React.useState('')

    return(
        <ScrollView style={{height: 600, width: 400}}>

            <Text style={{padding: 20, color: 'white'}}>This is the Messages Component</Text>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <View style={{height: 70, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text style={{padding: 20, color: 'white', justifyContent: 'center'}}>This is a test message for the messaging component of the photo view</Text>
            </View>
            <TextInput 
                style={styles.search}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    search: {
        margin: 10, 
        height: 40, 
        width: 300, 
        borderColor: 'white', 
        borderRadius: 20, 
        backgroundColor: 'white', 
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 90

    }

})


export default Messages;