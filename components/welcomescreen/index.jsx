import React from 'react'
import { StyleSheet, ImageBackground, View,Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const welcome = require("../../assets/welcome.png")
const gradient = require("../../assets/gradient.svg")



export default function Welcome() {
  const navigation = useNavigation()

  const handleInfoScreen = () =>{
    navigation.navigate("Info")
  }

  return (
    <View style={styles.welcome__container}>
        <Pressable onPress={handleInfoScreen}>
           
        <Image source={welcome} style={styles.image}  />
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      // width:200,
      // height:200,
    },
    welcome__container: {
      flex: 1,
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"purple"
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain', // or 'contain' based on your preference
      justifyContent: 'center',
      alignItems: 'center',
    },
  });