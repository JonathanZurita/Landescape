import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import { CameraKitCamera } from 'react-native-camera-kit';
const Camera = () => {

  return (
    <CameraKitCamera
      ref={cam => this.camera = cam}
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
      cameraOptions={{
        flashMode: 'auto',                // on/off/auto(default)
        focusMode: 'on',                  // off/on(default)
        zoomMode: 'on',                   // off/on(default)
        ratioOverlay:'1:1',               // optional
        ratioOverlayColor: '#00000077'    // optional
      }}
      onReadCode={event =>                // optional
        console.log(event.nativeEvent.codeStringValue)
      }
      resetFocusTimeout={0}               // optional
      resetFocusWhenMotionDetected={true} // optional
    />
  )

}

export default Camera;

