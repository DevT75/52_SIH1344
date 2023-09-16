import { StyleSheet,Image, View } from "react-native";

export default ({ src,selectedImage,onClick })=>{
    const imageSource = selectedImage  ? { uri: selectedImage } : src;
    return <View onTouchEnd={onClick}><Image style={s.image} source={imageSource}/></View>
}

const s = StyleSheet.create({
    image:{
        width: 320,
        height: 420,
        borderRadius: 12,
    }
});