import React, { useRef,useState } from 'react';
import { View ,StyleSheet,Dimensions, Text, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, Modal, ToastAndroid} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-toast-message';
import Toast from 'react-native-toast-message';



const {width,height} = Dimensions.get('window')

export default function PhoneVerification() {
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const navigation = useNavigation()
    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()
    const fiveInput = useRef()
    const sixthInput = useRef()
    const handleRegistration = async () => {
      // Simulate API call
      // const successful = await simulateRegistration();
      setIsRegistrationSuccessful(true);
  
      // Show Toast message
      if (isRegistrationSuccessful) {
        Toast.show({
          type: 'success',
          text1: 'Registration Successful!',
          text2: 'Welcome to the app!',
          color: 'green',
          position: 'top',
          style: {
            backgroundColor: '#00FF00', 
            color: 'green',
            zIndex:20

           
          },
         
          visibilityTime: 2000, // Time in milliseconds
        }, ToastAndroid.SHORT);
        setTimeout(() => {
          // if (isRegistrationSuccessful) {
                navigation.navigate('PinSetup'); 
              // }

      }, 3000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Registration Failed!',
          text2: 'Please try again later.',
          backgroundColor:"white",
          color: '#FF0000',
          style: {
            backgroundColor: '#FF0000', 
            color: '#FF0000',
            zIndex:20

            // borderRadius:8,
          // borderColor:"red",

          },
          position: 'top',
          visibilityTime: 2000, // Time in milliseconds

        
        }, ToastAndroid.SHORT);
      }
    };
 
    


  const Footer = ()=>{
    return  <View style={{height:height * 0.002, justifyContent:"space-between",paddingHorizontal:20,}}>
          <View style={{flexDirection:"row",justifyContent:"center",marginTop:-20,}}>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>

            <View 
            style={[styles.indicator,{backgroundColor:"blue",
            width:30,
            borderRadius:8,}]}></View>
            
            
          </View>
    </View>
  }
  const Authdiv = ()=>{
    
    return  <View style={{height:height * 0.1,marginBottom:20, justifyContent:"center",paddingHorizontal:30,width:"100%" }}>
          <TouchableOpacity style={{flexDirection:"column",justifyContent:"space-between",gap:10,}}>
              <Pressable onPress={handleRegistration} >
              <Text style={styles.create__btn}>
              Finish
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
      <View style={{ zIndex: 100 }}>

       <Toast
        position='top'
        topOffset={20}
      />
      </View>

    <Footer/>
    <View style={styles.country__div}>
    <Text style={{fontSize:32,fontWeight:"600",flexWrap:"wrap",width:"90%",marginBottom:7}}>Verify phone number</Text>
    <Text style={{fontSize:13,fontWeight:"400",flexWrap:"wrap",width:"99%",marginBottom:10}}>Please enter the OTP sent to +23481 2345 5436</Text>
        <View style={{marginVertical:30,flexDirection:"row",justifyContent:"space-around",width:"100%"}}>
            
            <View>
            <TextInput   
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={firstInput}
            onChange={text => {
                text && secondInput.current.focus();
            }}
            />
            </View>
            <View>
            <TextInput  
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={secondInput}
            onChange={text => {
              text ?thirdInput.current.focus() : firstInput.current.focus();
          }}
            />
            </View>
            <View>
            <TextInput  
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={thirdInput}
            onChange={text => {
              text ? fourthInput.current.focus(): secondInput.current.focus();
          }}
            />
            </View>
            <View>
            <TextInput  
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={fourthInput}
            onChange={text => {
              text? fiveInput.current.focus(): thirdInput.current.focus();
          }}
            />
            </View>
            <View>
            <TextInput  
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={fiveInput}
            onChange={text => {
              text ? sixthInput.current.focus():fourthInput.current.focus();
          }}
            />
            </View>
            <View>
            <TextInput  
            style={styles.code__Input} 
            keyboardType='number-pad'
            maxLength={1}
            ref={sixthInput}
            onChange={text => {
              text  && sixthInput.current.focus();
          }}
            />
            </View>

        </View>

        <View style={{marginVertical:10,alignItems:"center",width:"100%"}}>
            <Text  >Didnt get the code?</Text>
            <Text style={{color:"#0075FE"}}>Resend code!</Text>

        </View>
      
    </View>

    </View>
    <Authdiv/>

    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
  
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
    code__Input:{
        borderWidth:1,
        borderColor:"#E0E0E0",
        padding:10,
        borderRadius:10,
        width:50,
      textAlign:"center",
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

  });