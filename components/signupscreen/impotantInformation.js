import React, { useState, useCallback, useMemo, useRef } from 'react';
import { View ,StyleSheet,Dimensions, FlatList, Image, Text, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, Modal, TouchableWithoutFeedback} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';



const {width,height} = Dimensions.get('window')


const country =[
    {
      value:"1",
      title:"Male ",
    },
    {
        value:"2",
      title:"Female",
    },
    {
        value:"3",
      title:"Other",
    },
  
  ]
  const Locationn = ({item}) => {
    return(
        <View style={{alignItems:"center",flexDirection:"column",paddingVertical:16}}>
            <Text style={{fontSize:20}}>{item.title}</Text>

        </View>
    )

  }
export default function Information() {
  const navigation = useNavigation()
  const [isModalVisible , setIsModalVisible] = React.useState(false)

   // variables
   const snapPoints = useMemo(() => [ '50%'], []);
 
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
          <View style={styles.indicator}></View>
            <View 
            style={[styles.indicator,{backgroundColor:"blue",
            width:30,
            borderRadius:8,}]}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
            
            
          </View>
    </View>
  }
  const Authdiv = ()=>{
    
    return  <View style={{height:height * 0.1,marginBottom:20, justifyContent:"center",paddingHorizontal:30,width:"100%" }}>
          <TouchableOpacity style={{flexDirection:"column",justifyContent:"space-between",gap:10,}}>
              <Pressable onPress={()=>{ navigation.navigate("CreatePassword")}}>
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
        height:height * 0.7 ,

    }}>
    <Footer/>
    <View style={styles.country__div}>
    <Text style={{fontSize:32,fontWeight:"600",flexWrap:"wrap",width:"90%",marginBottom:10}}>Impotant Information</Text>
        <View style={{marginVertical:10}}>
            <Text >Full name</Text>
            <TextInput placeholder='Enter your full name'  style={styles.search__Input}/>

        </View>

        <View style={{marginVertical:10}}>
        <Text>Gender</Text>

        <Pressable onPress={()=> setIsModalVisible(!isModalVisible)}>
            <View style={styles.TextInput}
>
                <Text   style={styles.TextInput__text}>Choose your gender</Text>
            </View>

        </Pressable>
        </View>

        <View style={{marginVertical:10}}>
            <Text>Email</Text>
            <TextInput placeholder='Enter your email address'  style={styles.search__Input}/>

        </View>
        <View style={{marginVertical:10}}>
            <Text>Enter ypur phone number</Text>
            <TextInput placeholder='(+345) 47 3984 7489'  style={styles.search__Input}/>

        </View>
      
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
        <Text  style={styles.modal__text_header}>Choose Your Gender</Text>
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
        <TouchableOpacity 
        style={styles.create__btn} 
        onPress={() => setIsModalVisible(false)}>
              <Text style={{color:"white"}}>Close</Text>
            </TouchableOpacity>
        </View>

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
      
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:10,
      marginTop:10,

            
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
      
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:10,
      marginTop:10,
            
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
        maxHeight: height / 2.6, // Set the maximum height as half of the screen height
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
        padding:15,
        width:"100%",
        // justifyContent:"flex-start",
        // borderWidth:1,
        borderColor:"gray",
    }
  });