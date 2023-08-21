import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { banners } from "./HomeData";

const SliderBanner = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const newIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(newIndex);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: newIndex * 300, animated: true });
      }
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(scrollInterval);
  }, [currentIndex]);
  return (
    <ScrollView
      className="p-2"
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={handleScroll}
    >
      {banners.map((banner, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white rounded-lg shadow-md m-1"
          onPress={banner.onPress}
        >
          <Image
            source={{ uri: banner.imageSource }}
            className="w-64 h-32 rounded-md "
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SliderBanner;
