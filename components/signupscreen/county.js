import React, { useState, useCallback, useMemo, useRef } from 'react';
import { View ,StyleSheet,Dimensions, FlatList, Image, Text, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, Modal, TouchableWithoutFeedback} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
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
  const Locationn = ({item}) => {
    return(
        <View style={{alignItems:"center",flexDirection:"row",gap:6,paddingVertical:16}}>
            <Image source={item.image} style={styles.image}/>
            <Text style={{fontSize:20}}>{item.title}</Text>

        </View>
    )

  }
export default function Country() {
  const navigation = useNavigation()
  const [isModalVisible , setIsModalVisible] = React.useState(false)
   // ref
   const bottomSheetRef = useRef<BottomSheet>(null);

   // variables
   const snapPoints = useMemo(() => [ '50%'], []);
 
   // callbacks
//    const handlePresentModalPress = useCallback(() => {
//      bottomSheetModalRef.current?.present();
//    }, []);
   const handleSheetChanges = useCallback((index) => {
     console.log('handleSheetChanges', index);
   }, []);
   const handleopen = () => bottomSheetRef.current?.expand();
    // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
 
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
              <Pressable onPress={()=>{ navigation.navigate("Information")}}>
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
      <Text style={{fontSize:32,fontWeight:"600",flexWrap:"wrap",width:"90%"}}>What country do you live in ?</Text>
        <Text style={styles.label}>Country</Text>

        <Pressable onPress={()=> setIsModalVisible(!isModalVisible)}>
            <View style={styles.TextInput}
>
                <Text   style={styles.TextInput__text}>Nigeria</Text>
            </View>

        </Pressable>
      
    </View>

    </View>
    <Authdiv/>

    <Modal
    visible={isModalVisible}
    onRequestClose={() => setIsModalVisible(false)}
    animationType='slide'
    transparent={true}
    onBackdropPress={() => setIsModalVisible(false)}
    

    >
        <View style={styles.modal__content}>
          <View style={{width:width,justifyContent:"center",alignItems:"center"}}>
          <View style={styles.control}></View>

          </View>
        <TextInput placeholder='Search Country'  style={styles.search__Input}/>
        <Text  style={styles.modal__text_header}>Choose Your Country</Text>
      <View>
      <FlatList
    pagingEnabled
    data={country}
    contentContainerStyle={{
        alignItems:"flex-start",
        // gap:10,
    }}
    showsVerticalScrollIndicator={true}   
    renderItem={({item}) => <Locationn item= {item} />}
    />
      </View>
        <TouchableOpacity style={styles.create__btn} onPress={() => setIsModalVisible(false)}>
              <Text style={{color:"white"}}>Close</Text>
            </TouchableOpacity>
        </View>
        {/* <Button title='CLOSE' onPress={() => setIsModalVisible(false)} /> */}

    </Modal>

    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
    image: {
      display: "flex",
      alignItems: 'flex-start',
      justifyContent: 'flext-start',
      height:"100%",
      width: 50,
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
      backgroundColor:"#0075FE",
      fontSize:15,
      paddingHorizontal:12,
      paddingVertical:15,
      borderRadius:10,
      textAlign:"center",
      color:"white",
      alignItems:"center",
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
      
      paddingHorizontal:12,
      paddingVertical:15,
      borderRadius:10,
            
    },
    control:{
      width:70,
      height:3,
      backgroundColor:"#E0E0E0",
      borderRadius:5,
      alignItems:"center",
      marginBottom:10,

    },
    search__Input:{
        borderWidth:1,
        borderColor:"#E0E0E0",
        padding:10,
        borderRadius:10,
        width:width * 0.9,
      
      paddingHorizontal:12,
      paddingVertical:12,
      borderRadius:10,
      marginBottom:15,
            
    },
    TextInput__text:{
        fontSize:14,
      fontWeight:"400",
      textAlign:"left",

    },
    modal__text_header:{
      fontSize:24,
      fontWeight:"600",
      textAlign:"left",

    },
    modal__content:{
        // position:"absolute",
        // bottom:0,
        marginTop: 'auto',
        flex:1,
        backgroundColor:"gray",
        maxHeight: height / 1.32, // Set the maximum height as half of the screen height
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
        padding:10,
        width:"100%",
        // justifyContent:"flex-start",
        // borderWidth:1,
        borderColor:"gray",
    }
  });