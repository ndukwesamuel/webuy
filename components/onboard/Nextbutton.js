import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { useRef } from "react";

const Nextbutton = ({ percentage }) => {
  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start;
  };

  useEffect(() => {
    animation(percentage);
    return () => {};
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#E6E7E8"
            strokeWidth={strokeWidth}
          />
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#F4338F"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity
        className="bg-[#f4338f] absolute rounded-[100px]  p-5"
        activeOpacity={0.7}
      >
        <AntDesign name="arrowright" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Nextbutton;

const styles = StyleSheet.create({});
