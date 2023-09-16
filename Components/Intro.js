import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import "../styles.css"

export default ({ navigation }) => {
  return
  <View className="flex relative items-center justify-center bg-[#FFEDBC] w-screen h-screen">
    <View className="box-border absolute bottom-0 w-screen h-[412px] bg-[#176B87] border-1 border-b-[#176B87]"/>

  </View>;
};


// /* Rectangle 1 */

// box-sizing: border-box;

// position: absolute;
// width: 369px;
// height: 412px;
// left: -3px;
// top: 234px;

// background: #176B87;
// border: 1px solid #176B87;
// border-radius: 1px;


// /* Rectangle 4 */

// position: absolute;
// width: 361px;
// height: 236px;
// left: -1px;
// top: -2px;

// background: url(a-mascot-for-spreading-awareness-about-skin-diseases-holding-a-medical-equipment-removebg-preview.jpg);


// /* Group 2 */

// position: absolute;
// width: 198px;
// height: 50px;
// left: 82px;
// top: 501px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Rectangle 2 */

// position: absolute;
// width: 198px;
// height: 50px;
// left: 82px;
// top: 501px;

// background: #EEEEEE;
// border-radius: 13px;


// /* SETUP PROFILE */

// position: absolute;
// width: 148px;
// height: 22px;
// left: 107px;
// top: 515px;

// font-family: 'Merge One';
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 136.95%;
// /* or 25px */
// text-align: center;
// letter-spacing: 0.03em;

// color: #176B87;



// /* About DermAId Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non vulputate eros, vitae varius lacus. Phasellus suscipit euismod quam et pharetra. */

// position: absolute;
// width: 305px;
// height: 226px;
// left: 29px;
// top: 234px;

// font-family: 'Merge One';
// font-style: normal;
// font-weight: 400;
// font-size: 32px;
// line-height: 136.95%;
// /* or 44px */
// text-align: center;
// letter-spacing: 0.03em;

// color: #FFFFFF;



// /* Vector 1 */

// position: absolute;
// width: 361px;
// height: 98px;
// left: 0px;
// top: 141px;

// background: linear-gradient(180deg, rgba(23, 107, 135, 0.8) 0%, #176B87 100%);
// border: 1px solid #176B87;
