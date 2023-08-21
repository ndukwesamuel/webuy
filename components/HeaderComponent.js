import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = ({ title }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <View>
        <View className=" flex-row items-center gap-2 ">
          <Ionicons name="arrow-undo-outline" size={24} color="black" />
          <Text>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
