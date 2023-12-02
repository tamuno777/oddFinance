import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView, Dimensions } from 'react-native';
import Welcome from './components/welcomescreen';
import Info from './components/infoscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from './components/slider';
import Country from './components/signupscreen/county';
import { GestureHandlerRootView,TapGestureHandler } from 'react-native-gesture-handler';
import Information from './components/signupscreen/impotantInformation';
import CreatePassword from './components/signupscreen/createPassword';
import PhoneVerification from './components/signupscreen/phoneVerification';


const Stack = createNativeStackNavigator();
const {width,height} = Dimensions.get('window')
export default function App() {
  
  return (
  
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
          name="Slider"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
                            
            },
            headerTitleStyle: {
              color: 'white',
              borderWidth: 0, 
              borderBottomWidth: 0,
              elevation:0, 
            },
            headerShadowVisible:false,
          }}
          component={Slider}
        />
        <Stack.Screen
         name="Country" 
         options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",              
          },
          headerTitleStyle: {
            color: 'white',
            borderWidth: 0, 
            borderBottomWidth: 0,
            elevation:0, 
          },
          contentStyle:{
            backgroundColor:"white"
          },
          headerShadowVisible:false,
        }}
         component={Country} />
        <Stack.Screen
         name="Information" 
         options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",              
          },
          headerTitleStyle: {
            color: 'white',
            borderWidth: 0, 
            borderBottomWidth: 0,
            elevation:0, 
          },
          contentStyle:{
            backgroundColor:"white"
          },
          headerShadowVisible:false,
        }}
         component={Information} />
        <Stack.Screen
         name="CreatePassword" 
         options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",              
          },
          headerTitleStyle: {
            color: 'white',
            borderWidth: 0, 
            borderBottomWidth: 0,
            elevation:0, 
          },
          contentStyle:{
            backgroundColor:"white"
          },
          headerShadowVisible:false,
        }}
         component={CreatePassword} />
        <Stack.Screen
         name="PhoneVerification" 
         options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",              
          },
          headerTitleStyle: {
            color: 'white',
            borderWidth: 0, 
            borderBottomWidth: 0,
            elevation:0, 
          },
          contentStyle:{
            backgroundColor:"white"
          },
          headerShadowVisible:false,
        }}
         component={PhoneVerification} />
        <Stack.Screen
         name="Info" 
         options={{
          title: "",
          headerStyle: {
          },
          headerTitleStyle: {
            color: 'blue',
            borderWidth: 0, 
            borderBottomWidth: 0,
            elevation:0, 
          },
          headerShadowVisible:false,
        }}
         component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#974ad4",
    alignItems: 'center',
    padding: 40,
    justifyContent: 'space-around',
  },
});
