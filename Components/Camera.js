import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useState, useEffect, useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import Button from "./Button";

export default () => {
  const camera = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, setPermission] = Camera.useCameraPermissions();
  const [hasMediaPermission, setHasMediaPermission] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState();
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [back, setBack] = useState(false);
  if (hasMediaPermission === null) {
    return <Text>We need your permission to store images in device</Text>;
  }
  if (!permission) {
    return <Text>Please give permission for using camera.</Text>;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={setPermission} title="grant permission" />
      </View>
    );
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    setBack((curr) => (curr === true ? false : true));
  }
  const clickPhoto = async () => {
    if (camera) {
      try {
        const data = await camera.current.takePictureAsync();
        console.log(data);
        setPhoto(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const savePhoto = async () => {
    if (photo) {
      try {
        await MediaLibrary.createAssetAsync(photo);
        alert("Picture saved!!!");
        setPhoto(null);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      {!photo ? (
        <Camera
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",
          }}
          type={type}
          ratio="16:9"
          flashMode={flash}
          ref={camera}
        >
          <View
            style={{
              width: "100%",
              justifyContent:"flex-end",
              height:"100%"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 40,
              }}
            >
              <Pressable onPress={toggleCameraType}>
                <Entypo
                  name="retweet"
                  color={back ? "gray" : "#FAF1E4"}
                  size={28}
                />
              </Pressable>
              <View
                style={{
                  flex: 1,
                  paddingLeft:56
                }}
              >
                <Button name="camerao" onPress={clickPhoto} />
              </View>
              <Pressable
                onPress={() => {
                  setFlash(
                    flash == Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              >
                <Entypo
                  name="flash"
                  color={
                    flash == Camera.Constants.FlashMode.off ? "#FAF1E4" : "gray"
                  }
                  size={28}
                />
              </Pressable>
            </View>
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: photo }} style={styles.camera} />
      )}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        {photo && (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 40,
              marginBottom: 64,
              marginTop: 32,
            }}
          >
            <Button title="Retake-photo" onPress={() => setPhoto(null)} />
            <Button
              title="Save"
              style={{
                borderRadius: 18,
              }}
              onPress={savePhoto}
            />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 64,
    marginTop: 16,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    color: "white",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
