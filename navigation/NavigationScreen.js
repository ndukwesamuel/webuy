import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useSelector } from "react-redux";
import BottonTabNavigation from "./BottonTabNavigation";
import Onboarding from "../screen/Onboarding";
const Stack = createStackNavigator();

const NavigationScreen = () => {
  const { user_isLoading, data, user, isError } = useSelector(
    (state) => state.LoginSlice
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Botton Navigation"
        component={BottonTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
