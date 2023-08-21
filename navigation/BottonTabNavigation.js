import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Home, Profile, Search } from "../screen";

const Tab = createBottomTabNavigator();

const BottonTabNavigation = () => {
  const screenOptions = {
    tabBarActiveTintColor: "rgba(72, 130, 101, 0.5)",
    tabBarShowLabel: true, // we can make it false sha
    headerShown: false,
    tabStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      elevation: 0,
      height: 70,
    },
  };
  return (
    <Tab.Navigator
      // initialRouteName="Eventhome"
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarActiveTintColor: "#505050",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                // color="#505050"
                color={focused ? "#005091" : "gray"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarActiveTintColor: "#505050",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={24}
                // color="#505050"
                color={focused ? "#005091" : "gray"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarActiveTintColor: "#505050",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                // color="#505050"
                color={focused ? "#005091" : "gray"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonTabNavigation;

const styles = StyleSheet.create({});
