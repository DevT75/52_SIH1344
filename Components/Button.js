import { Pressable, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import "../styles.css"
export default ({ title,onPress,name })=>{
    return (
        <View style = {s.buttonContainer}>
            <Pressable style = {s.button} onPress={onPress}>
                <AntDesign name={name}
                size={20}
                color="#FAF1E4"
                style={s.buttonIcon}
                />
                <Text style = {s.buttonText}>{ title }</Text>
            </Pressable>
        </View>
    )
}
const s = StyleSheet.create({
    buttonContainer:{
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        padding: 8,
    },
    button: {
        padding: 15,
        height: '60%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:"center",
        backgroundColor: '#435334',
    },
    buttonIcon:{
        paddingRight:4,
    },
    buttonText:{
        color: '#FAF1E4',
        fontSize: 18,
    }
});
