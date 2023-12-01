import React, { useState } from 'react'
import { View ,StyleSheet,Dimensions, FlatList, Image, Text, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, Modal} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';



const {width,height} = Dimensions.get('window')
// const [userCountry, setUserCountry] = React.useState(null);
// let selectedCountry = null;

const country =[
    {
      value:"1",
      image: require("../../assets/emojione_flag-for-united-kingdom.png"),
      title:"United Kingdom ",
    },
    {
        value:"2",
      image: require("../../assets/emojione_flag-for-united-states.png"),
      title:"United state",
    },
    {
        value:"3",
      image: require("../../assets/emojione_flag-for-germany.png"),
      title:"Germany",
    },
    {
        value:"4",
      image: require("../../assets/emojione_flag-for-china.png"),
      title:"China",
    },
    {
        value:"5",
      image: require("../../assets/emojione_flag-for-nigeria.png"),
      title:"Nigeria",
    },
    {
        value:"6",
      image: require("../../assets/emojione_flag-for-india.png"),
      title:"India",
    },
    {
        value:"7",
      image: require("../../assets/emojione_flag-for-south-korea.png"),
      title:"Korea",
    },
  ]
//   const Slide = ({item}) => {
//     return(
//         <View style={{alignItems:"center"}}>
//             <Image source={item.image} style={styles.image}/>
//             <Text style={styles.title}>{item.title}</Text>

//         </View>
//     )

//   }
export default function Country() {
  const navigation = useNavigation()
  const [currentslidindex , setcurrentslidindex] = React.useState(0)
  const Footer = ()=>{
    return  <View style={{height:height * 0.002, justifyContent:"space-between",paddingHorizontal:20,}}>
          <View style={{flexDirection:"row",justifyContent:"center",marginTop:-20,}}>
            <View 
            style={[styles.indicator,{backgroundColor:"blue",
            width:30,
            borderRadius:8,}]}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
            
            
          </View>
    </View>
  }
  const Authdiv = ()=>{
    
    return  <View style={{height:height * 0.1,marginBottom:20, justifyContent:"center",paddingHorizontal:30,width:"100%" }}>
          <TouchableOpacity style={{flexDirection:"column",justifyContent:"space-between",gap:10,}}>
              <Pressable onPress={()=>{ navigation.navigate("Info")}}>
              <Text style={styles.create__btn}>
              Continue
              </Text>
              </Pressable>
             
          </TouchableOpacity>
    </View>
  }
   
  return (
    <KeyboardAvoidingView>
    <SafeAreaView style={styles.country__container}>

    <StatusBar style="dark" backgroundColor="white" translucent={true} />
    <View style={{
        height:height * 0.7,

    }}>
    <Footer/>
    <View style={styles.country__div}>
        <Text style={styles.label}>Country</Text>
        <Pressable>
        <TextInput 
        placeholder='Nigeria'
        style={styles.TextInput}

        />
       {/* <BottomSheetPicker
  title="Country"
  placeholder="Nigeria"
  bottomSheetTitle="Select you Country"
  required={true}
  requiredColor='#d50000'
  primaryColor='green'
  secondaryColor='gray'
  items={country}
  selectedItem={selectedCountry}
  snapPoints={['60%']}
  pickerContentHeight={425}
  titleStyle={styles.label}
  containerStyle={{paddingHorizontal:20}}
  pickerStyle={{}}
  placeholderStyle={{}}
  listItemStyle={{display:"flex",gap:20}}
  itemTextStyle={{}}
  customPicker={{}}
  customBottomSheetTitle={component}
  customIcon={component}
  customListItem={component}
  customPickerContent={component}
  onSelectItem={(item) => selectedLocation = item}
  onBottomSheetShow={() => {}}
  onDismiss={() => {}}
  pickerUuid=''
  playingUuid={playingUuid}
  updatePlayingUuid={(country) => setUserCountry(country)}
/> */}
        </Pressable>
       

    </View>
    </View>
    <Authdiv/>

    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    image: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'flext-start',
      width:width,
      height:"25%",
      resizeMode:"contain"
    },
    country__container: {
      flex: 1,
      display: "flex",
      flexDirection:"column",
      backgroundColor:"white",
    },
    title:{
      fontWeight:"800",
      fontSize:30,
      marginBottom:10,
      width:"100%",
      flexWrap:"wrap",
      textAlign: "center",

    },
    country__div:{
      height:height * 0.3,
      marginTop:20,
      alignItems:"flex-start",
      width:"100%",
        paddingHorizontal:20,

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
      justifyContent:"center",


    },
    label:{
        fontWeight:"400",
        fontSize:14,
        marginBottom:20,
        textAlign: "left",


    },
    TextInput:{
        borderWidth:1,
        borderColor:"#E0E0E0",
        padding:10,
        borderRadius:10,
        width:width * 0.9,
      fontSize:14,
      fontWeight:"400",
      paddingHorizontal:12,
      paddingVertical:15,
      borderRadius:10,
      textAlign:"left",
            
    }
  });