import React, { useRef,useState } from 'react';
import { View ,StyleSheet,Dimensions, Text, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-toast-message';
import { MaterialIcons } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window')
const dailPadSize =width * .2
export default function PinSetup() {
  const [pin, setPin] = useState(['', '', '', '', '', '']); // Array to store individual pin values
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handlePinChange = (value, index) => {
    // Update the pin array at specific index
    setPin((prevPin) => {
      const newPin = [...prevPin];
      newPin[index] = value;
      return newPin;
    });

    // Focus on next input field if not the last one
    if (index < 5) {
      inputRefs[index + 1].current.focus();
    } else {
      // Do something with the PIN
      console.log(`Entered PIN: ${pin.join('')}`);
      // You can store the PIN in secure storage here
      // and navigate to the next screen
    }
  };

  const handleBackspace = () => {
    const lastIndex = pin.length - 1;
    if (lastIndex >= 0) {
      setPin((prevPin) => {
        const newPin = [...prevPin];
        newPin[lastIndex] = '';
        return newPin;
      });

      // Focus on previous input field
      if (lastIndex > 0) {
        inputRefs[lastIndex - 1].current.focus();
      }
    }
  };
  const dailPad = [ 
    {
      id:"1",
    value :"1"
  },
    {
      id:"2",
    value :"2"
  },
    {
      id:"3",
    value :"3"
  },
    {
      id:"4",
    value :"4"
  },
    {
      id:"5",
    value :"5"
  },
    {
      id:"6",
    value :"6"
  },
    {
      id:"7",
    value :"7"
  },
    {
      id:"8",
    value :"8"
  },
    {
      id:"9",
    value :"9"
  },
    {
      id:"10",
    value :""
  },
    {
      id:"11",
    value :"0"
  },
    {
      id:"11",
    // value: require("../../assets/cancle.png"),
    value: "del",
  },
  ]
  const navigation = useNavigation()
    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()
    const fiveInput = useRef()
    const sixthInput = useRef()
   

  const Dailpad = ()=>{
    return  <View style={{ width:"100%",backgroundColor:"transparent",justifyContent:"center",alignItems:"center"}}>
      <FlatList
      style={{flexGrow:0}}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{gap:20}}
      contentContainerStyle={{gap:10}}
      data={dailPad}
      keyExtractor={dailPad.id}
      renderItem={({item}) =>{
        return <TouchableOpacity 
        disabled={item.value === "" }
        onPress={() => handlePinChange(item.value, item.id)}
        >
          <View 
          style={{
            // width:dailPadSize,
            width:60,
            borderWidth:item.value === ""? 0:1,
            borderColor:"#FFF",
            borderRadius:dailPadSize,
            justifyContent:"center",
            alignItems:"center",
            gap:10,
            backgroundColor:item.value === ""? "transparent":"#FFF",
            height:60,
            shadowColor:item.value === ""? "": '#000000ef',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.06,
            shadowRadius: 40,
            elevation:item.value === ""? 0: 1,
            margin:13,

            


            
            }}
            >
              {item.value === "del"? <MaterialIcons onPress={handleBackspace} name="cancel" size={dailPadSize * 0.25} color="red" />:
            <Text onPress={handlePinChange} style={{fontSize:dailPadSize * 0.25,color:"#0075FE"}}>{item.value}</Text>}
          </View>


        </TouchableOpacity>
      }}
      />
          
    </View>
  }
  const Authdiv = ()=>{
    
    return  <View style={{height:height * 0.15,marginBottom:15, justifyContent:"center",paddingHorizontal:30,width:"100%" }}>
          <TouchableOpacity style={{flexDirection:"column",justifyContent:"space-between",gap:10,}}>
              <Pressable >
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
    {/* <Footer/> */}
    <View style={styles.country__div}>
    <Text style={{fontSize:32,fontWeight:"600",flexWrap:"wrap",width:"100%",marginBottom:7,textAlign:"center"}}>Set up your pin</Text>
    <Text style={{fontSize:15,fontWeight:"400",flexWrap:"wrap",width:"100%",marginBottom:0,textAlign:"center"}}>Enter a 6-digit code you wont forget</Text>

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

        <View style={{alignItems:"center",width:"100%"}}>
           <Dailpad/>

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
      // height:height * 0.3,
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