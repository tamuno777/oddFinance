import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView, Dimensions } from 'react-native';
import Welcome from './components/welcomescreen';
import Info from './components/infoscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from './components/slider';
import Country from './components/signupscreen/county';

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
         name="Info" 
         options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",              
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
