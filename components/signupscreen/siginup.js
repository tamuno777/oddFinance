import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: "1",
    title: "What country do you Currently live in",
    formFields: [
      { label: "Country", placeholder: "Nigeria", key: "email", value: "" },
    ],
  },
  {
    id: "2",
    title: "Important information",
    formFields: [
      { label: "Full name", placeholder: "Enter your full name", key: "fullname", value: "" },
      { label: "Password", placeholder: "choose your gender", key: "gender", value: "" },
    ],
  },
  {
    id: "3",
    title: "Sign In",
    formFields: [
      { label: "Email", placeholder: "Enter your email", key: "email", value: "" },
      { label: "Password", placeholder: "Enter your password", key: "password", value: "" },
    ],
  },
  {
    id: "4",
    title: "Sign In",
    formFields: [
      { label: "Email", placeholder: "Enter your email", key: "email", value: "" },
      { label: "Password", placeholder: "Enter your password", key: "password", value: "" },
    ],
  },
];

const Slide = ({ item, currentSlideIndex, onInputChange, onSignInPress }) => {
  if (item.id === "4") {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{item.title}</Text>
        {item.formFields.map((field) => (
          <TextInput
            key={field.key}
            style={styles.input}
            placeholder={field.placeholder}
            value={field.value}
            onChangeText={(text) => onInputChange(field.key, text)}
          />
        ))}
        <TouchableOpacity onPress={onSignInPress}>
          <Text style={styles.login__btn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  }
};

export default function Siginin() {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formFields, setFormFields] = useState({ email: "", password: "" });

  const onInputChange = (key, value) => {
    setFormFields((prevFields) => ({ ...prevFields, [key]: value }));
  };

  const onSignInPress = () => {
    // Handle sign-in logic using formFields
    console.log("Signing in with:", formFields);
  };

  return (
    <SafeAreaView style={styles.slider__container}>
      <StatusBar style="dark" backgroundColor="white" translucent={true} />
      {/* ... your existing code */}
      <FlatList
        pagingEnabled
        data={slides}
        contentContainerStyle={{
          height: height * 0.55,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <Slide
            item={item}
            currentSlideIndex={currentSlideIndex}
            onInputChange={onInputChange}
            onSignInPress={onSignInPress}
          />
        )}
      />
      {/* ... your existing code */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... your existing styles

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 8,
    width: '80%',
    paddingHorizontal: 10,
  },
});
