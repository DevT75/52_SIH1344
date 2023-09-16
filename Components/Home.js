import React, { useState, useLayoutEffect, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import "../styles.css";
import Button from "./Button";
import Imageviewer from "./Imageviewer";
// import { Path,Svg } from 'react-native/svg';
import * as Imagepicker from "expo-image-picker";
// import { Image } from "react-native-web";

const img = require("../assets/download.jpeg");
// const { width:screenWidth } = Dimensions.get('window');
export default ({ navigation }) => {
  function useWindowSize() {
    const [size, setSize] = useState({
      width: 0,
      height: 0,
      h: 0,
    });
    useLayoutEffect(() => {
      function updateSize() {
        setSize({
          width: window.innerWidth,
          h: window.innerHeight,
          height: (window.innerWidth * 159) / 360,
        });
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const {
    width: svgWidth,
    height: svgHeight,
    h: screenHeight,
  } = useWindowSize();
  return (
    <View
      style={{ height: screenHeight, width: svgWidth }}
      className="bg-[#176B87] flex flex-col items-center justify-between"
    >
      <View
        style={{ width: svgWidth,height: 0.16*screenHeight}}
        className="flex flex-row items-center justify-start"
      >
        <View>

        </View>
      </View>
      <View
        style={{ height: screenHeight * 0.37, width: svgWidth }}
        className="flex items-center justify-center"
      >
        <View
          style={{ height: screenHeight * 0.40, width: svgWidth * 0.753 }}
          className="bg-[#64CCC5] flex items-center justify-center rounded-md"
        >
          <View style={{height : screenHeight*0.35,width: svgWidth*0.65}} className="flex items-center justify-center p-1 rounded-md"
            onClick={()=>console.log("Details About Disease!!")}>
            <Image style={{height : screenHeight*0.35,width: svgWidth*0.65}} className="rounded-md" source={img}/>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-end">
        <svg
          className="-my-1"
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 360 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M360 57C360 -16.0001 -1 -18.0001 -1 57V157.761H360V57Z"
            fill="#64CCC5"
            stroke="#176B87"
          />
        </svg>
        <View
          style={{ height: svgHeight }}
          className="flex flex-col absolute w-full"
        >
          <View className="flex flex-row items-start justify-around h-[40%]">
            <View
              style={{ height: svgHeight * 0.55, width: svgHeight * 0.55 }}
              className="flex flex-row items-center justify-center bg-[#EEEEEE] rounded-full -my-10 shadow-drop"
              onClick={() => console.log("Camera!!!")}
            >
              <svg
                width={(svgHeight * 0.55 * 42) / 86}
                height={(svgHeight * 0.55 * 42) / 86}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 7H29.4525L26.25 3.5H15.75L12.5475 7H7C6.07174 7 5.1815 7.36875 4.52513 8.02513C3.86875 8.6815 3.5 9.57174 3.5 10.5V31.5C3.5 32.4283 3.86875 33.3185 4.52513 33.9749C5.1815 34.6313 6.07174 35 7 35H35C35.9283 35 36.8185 34.6313 37.4749 33.9749C38.1312 33.3185 38.5 32.4283 38.5 31.5V10.5C38.5 9.57174 38.1312 8.6815 37.4749 8.02513C36.8185 7.36875 35.9283 7 35 7ZM35 31.5H7V10.5H14.0875L17.29 7H24.71L27.9125 10.5H35V31.5ZM21 12.25C18.6794 12.25 16.4538 13.1719 14.8128 14.8128C13.1719 16.4538 12.25 18.6794 12.25 21C12.25 23.3206 13.1719 25.5462 14.8128 27.1872C16.4538 28.8281 18.6794 29.75 21 29.75C23.3206 29.75 25.5462 28.8281 27.1872 27.1872C28.8281 25.5462 29.75 23.3206 29.75 21C29.75 18.6794 28.8281 16.4538 27.1872 14.8128C25.5462 13.1719 23.3206 12.25 21 12.25ZM21 26.25C19.6076 26.25 18.2723 25.6969 17.2877 24.7123C16.3031 23.7277 15.75 22.3924 15.75 21C15.75 19.6076 16.3031 18.2723 17.2877 17.2877C18.2723 16.3031 19.6076 15.75 21 15.75C22.3924 15.75 23.7277 16.3031 24.7123 17.2877C25.6969 18.2723 26.25 19.6076 26.25 21C26.25 22.3924 25.6969 23.7277 24.7123 24.7123C23.7277 25.6969 22.3924 26.25 21 26.25Z"
                  fill="#176B87"
                />
              </svg>
            </View>
          </View>
          <View className="flex flex-row items-start justify-around h-[60%]">
            <View
              style={{ height: svgHeight * 0.41, width: svgHeight * 0.41 }}
              className="flex flex-row items-center justify-center bg-[#EEEEEE] rounded-full -my-6 shadow-drop -ml-2"
              onClick={() => console.log("Camera!!!")}
            >
              <svg
                width={(svgHeight * 0.41 * 42) / 86}
                height={(svgHeight * 0.41 * 42) / 86}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4062 13.0307H19.4373V26.9062C19.4373 27.0867 19.585 27.2344 19.7654 27.2344H22.2264C22.4068 27.2344 22.5545 27.0867 22.5545 26.9062V13.0307H25.5938C25.8686 13.0307 26.0203 12.7148 25.8521 12.5016L21.2584 6.68554C21.2277 6.64633 21.1885 6.61461 21.1437 6.5928C21.0989 6.57098 21.0498 6.55965 21 6.55965C20.9502 6.55965 20.9011 6.57098 20.8563 6.5928C20.8115 6.61461 20.7723 6.64633 20.7416 6.68554L16.1479 12.4975C15.9797 12.7148 16.1314 13.0307 16.4062 13.0307ZM36.0117 25.6758H33.5508C33.3703 25.6758 33.2227 25.8234 33.2227 26.0039V32.3203H8.77734V26.0039C8.77734 25.8234 8.62969 25.6758 8.44922 25.6758H5.98828C5.80781 25.6758 5.66016 25.8234 5.66016 26.0039V34.125C5.66016 34.851 6.24668 35.4375 6.97266 35.4375H35.0273C35.7533 35.4375 36.3398 34.851 36.3398 34.125V26.0039C36.3398 25.8234 36.1922 25.6758 36.0117 25.6758Z"
                  fill="#176B87"
                />
              </svg>
            </View>
            <View
              style={{ height: svgHeight * 0.41, width: svgHeight * 0.41 }}
              className="flex flex-row items-center justify-center bg-[#EEEEEE] rounded-full -my-6 shadow-drop -mr-2 -mb-4"
              onClick={() => console.log("Camera!!!")}
            >
              <svg
                width={(svgHeight * 0.41 * 42) / 86}
                height={(svgHeight * 0.41 * 42) / 86}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.375 30.1875H28.875V32.8125H18.375V30.1875ZM13.125 30.1875H15.75V32.8125H13.125V30.1875ZM18.375 23.625H28.875V26.25H18.375V23.625ZM13.125 23.625H15.75V26.25H13.125V23.625ZM18.375 17.0625H28.875V19.6875H18.375V17.0625ZM13.125 17.0625H15.75V19.6875H13.125V17.0625Z"
                  fill="#176B87"
                />
                <path
                  d="M32.8125 6.5625H28.875V5.25C28.875 4.55381 28.5984 3.88613 28.1062 3.39384C27.6139 2.90156 26.9462 2.625 26.25 2.625H15.75C15.0538 2.625 14.3861 2.90156 13.8938 3.39384C13.4016 3.88613 13.125 4.55381 13.125 5.25V6.5625H9.1875C8.49131 6.5625 7.82363 6.83906 7.33134 7.33134C6.83906 7.82363 6.5625 8.49131 6.5625 9.1875V36.75C6.5625 37.4462 6.83906 38.1139 7.33134 38.6062C7.82363 39.0984 8.49131 39.375 9.1875 39.375H32.8125C33.5087 39.375 34.1764 39.0984 34.6687 38.6062C35.1609 38.1139 35.4375 37.4462 35.4375 36.75V9.1875C35.4375 8.49131 35.1609 7.82363 34.6687 7.33134C34.1764 6.83906 33.5087 6.5625 32.8125 6.5625ZM15.75 5.25H26.25V10.5H15.75V5.25ZM32.8125 36.75H9.1875V9.1875H13.125V13.125H28.875V9.1875H32.8125V36.75Z"
                  fill="#176B87"
                />
              </svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF1E4",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: "row",
    flex: 2 / 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  camera: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

{
  /* <View className="flex flex-1 bg-[#FAF1E4] items-center justify-center">
<View className= "flex flex-row justify-center items-center w-full h-[40%]">
  <Imageviewer src={img}/>
</View>
{selectedImage == null ? (
  <View className="">
    {/* <Button title="Upload" name="picture" onPress={selectImage} /> */
}
{
  /* <Button
      title="Click" name="camerao"
      onPress={() => navigation.navigate("Camera")}
    /> */
}
//   </View>
// ) : (
//   <View style={styles.footerContainer}>
//     <View
//       style={{
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignContent: "center",
//       }}
//     >
//       <Button title="Go Back" name="" onPress={() => setSelectedImage(null)} />
//       <Button title="Get Result" name="" onPress={getResult} style={{}} />
//     </View>
//   </View>
// )}
// <StatusBar style="auto" />
// </View>

/* Group 5 */

// position: absolute;
// width: 86px;
// height: 86px;
// left: 137px;
// top: 443px;

// /* Ellipse 4 */

// position: absolute;
// width: 86px;
// height: 86px;
// left: 137px;
// top: 443px;

// background: #EEEEEE;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

// /* mdi:camera-outline */

// position: absolute;
// width: 42px;
// height: 42px;
// left: 159px;
// top: 465px;

// /* Vector */

// position: absolute;
// left: 8.33%;
// right: 8.33%;
// top: 8.33%;
// bottom: 16.67%;

// background: #176B87;

{
  /* <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 7H29.4525L26.25 3.5H15.75L12.5475 7H7C6.07174 7 5.1815 7.36875 4.52513 8.02513C3.86875 8.6815 3.5 9.57174 3.5 10.5V31.5C3.5 32.4283 3.86875 33.3185 4.52513 33.9749C5.1815 34.6313 6.07174 35 7 35H35C35.9283 35 36.8185 34.6313 37.4749 33.9749C38.1312 33.3185 38.5 32.4283 38.5 31.5V10.5C38.5 9.57174 38.1312 8.6815 37.4749 8.02513C36.8185 7.36875 35.9283 7 35 7ZM35 31.5H7V10.5H14.0875L17.29 7H24.71L27.9125 10.5H35V31.5ZM21 12.25C18.6794 12.25 16.4538 13.1719 14.8128 14.8128C13.1719 16.4538 12.25 18.6794 12.25 21C12.25 23.3206 13.1719 25.5462 14.8128 27.1872C16.4538 28.8281 18.6794 29.75 21 29.75C23.3206 29.75 25.5462 28.8281 27.1872 27.1872C28.8281 25.5462 29.75 23.3206 29.75 21C29.75 18.6794 28.8281 16.4538 27.1872 14.8128C25.5462 13.1719 23.3206 12.25 21 12.25ZM21 26.25C19.6076 26.25 18.2723 25.6969 17.2877 24.7123C16.3031 23.7277 15.75 22.3924 15.75 21C15.75 19.6076 16.3031 18.2723 17.2877 17.2877C18.2723 16.3031 19.6076 15.75 21 15.75C22.3924 15.75 23.7277 16.3031 24.7123 17.2877C25.6969 18.2723 26.25 19.6076 26.25 21C26.25 22.3924 25.6969 23.7277 24.7123 24.7123C23.7277 25.6969 22.3924 26.25 21 26.25Z" fill="#176B87"/>
</svg> */
}

// const [selectedImage, setSelectedImage] = useState(null);
// const selectImage = async () => {
//   const result = await Imagepicker.launchImageLibraryAsync({
//     allowsEditing: true,
//     quality: 1,
//   });
//   if (!result.canceled) {
//     setSelectedImage(result.assets[0].uri);
//     console.log(result);
//   } else {
//     alert("You did not select an image.");
//   }
// };
// const getResult = async () => {
//   alert("You have AIDS");
// };
