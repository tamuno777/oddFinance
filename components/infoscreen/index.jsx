import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
// const welcome = require("../../assets/welcome.png")


export default function Info() {
  return (
    <View style={styles.welcome__container}>
        {/* <Image source={welcome} style={styles.image}  /> */}
        <Text  style={styles.image} >sign in  </Text>
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
    },
  });