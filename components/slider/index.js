import React, { useState } from 'react'
import { View ,StyleSheet,Dimensions, FlatList, Image, Text, Button, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get('window')
const slides =[
    {
      id:"1",
      image: require("../../assets/img3.png"),
      title:"Cross-boarder Money Transfer",
      subtitle:"Transfer money internationally with ease."
    },
    {
      id:"2",
      image: require("../../assets/img2.png"),
      title:"Real-time Exchange Rate Information",
      subtitle:"Know the value of your money in real time."
    },
    {
      id:"3",
      image: require("../../assets/img1.png"),
      title:"Quick Delivery of Funds",
      subtitle:"Receive payments in minutes with low transaction fees."
    },
  ]
  const Slide = ({item}) => {
    return(
        <View style={{alignItems:"center"}}>
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>

        </View>
    )

  }
export default function Slider() {
  const navigation = useNavigation()
  const [currentslidindex , setcurrentslidindex] = React.useState(0)
  const Footer = ()=>{
    return  <View style={{height:height * 0.002, justifyContent:"space-between",paddingHorizontal:20,}}>
          <View style={{flexDirection:"row",justifyContent:"center",marginTop:-20,}}>
              {slides.map((_,index) => (
                <View key={index} style={[styles.indicator, currentslidindex == index && {
                  backgroundColor:"blue",
                  width:30,
                  borderRadius:8,

                }]}/>

              ))}
          </View>
    </View>
  }
  const Authdiv = ()=>{
    
    return  <View style={{height:height * 0.2,marginBottom:20, justifyContent:"space-between",paddingHorizontal:10,width:"90%" }}>
          <TouchableOpacity style={{flexDirection:"column",justifyContent:"space-between",gap:10,}}>
              <Pressable onPress={()=>{ navigation.navigate("Country")}}>
              <Text style={styles.create__btn}>
              Create new account
              </Text>
              </Pressable>
              <Pressable>
              <Text style={styles.login__btn}>
              Login
              </Text>
              </Pressable>
          </TouchableOpacity>
    </View>
  }
   
  return (
    <SafeAreaView style={styles.slider__container}>
    <StatusBar style="dark" backgroundColor="white" translucent={true} />
    <Footer/>
    <FlatList
    pagingEnabled
    data={slides}
    contentContainerStyle={{
        height:height * 0.55
    }}
    showsHorizontalScrollIndicator={false}
    horizontal
    renderItem={({item}) => <Slide item= {item} />}
    />
    <Authdiv/>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    image: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      width:width,
      height:"75%",
      resizeMode:"contain"
    },
    slider__container: {
      flex: 1,
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"white"
    },
    title:{
      fontWeight:"800",
      fontSize:30,
      marginBottom:10,
      width:"70%",
      flexWrap:"wrap",
      textAlign: "center",

    },
    subtitle:{
      fontSize:16,
      marginBottom:10,
      textAlign: "center",
        fontWeight: "400",
        width:"75%",
      flexWrap:"wrap",

    },
    indicator:{
      height:8,
      width:8,
      backgroundColor:"#C7E1FF",
      marginHorizontal:2,
      borderRadius:100,
    },
    create__btn:{
      backgroundColor:"blue",
      fontSize:15,
      paddingHorizontal:12,
      paddingVertical:15,
      borderRadius:10,
      textAlign:"center",
      color:"white",


    },
    login__btn:{
      textAlign:"center",
      color:"black",
       fontSize:15,
      paddingHorizontal:12,
      paddingVertical:15,
      // borderRadius:10,


    },
  });