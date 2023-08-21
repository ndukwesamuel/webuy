import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native";
import { onboardingSlides } from "../data/data";
import Onboardingitem from "../components/onboard/Onboardingitem";
import Paginator from "../components/onboard/Paginator";
import Nextbutton from "../components/onboard/Nextbutton";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNextButton = () => {
    if (currentIndex === onboardingSlides.length - 1) {
      navigation.navigate("Botton Navigation"); // Navigate to the next screen
    } else {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View className="flex-1 items-center bg-white">
      <View className="flex-3 h-[80%]">
        <FlatList
          data={onboardingSlides}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Onboardingitem item={item} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View className="h-[3%]">
        <Paginator data={onboardingSlides} scrollx={scrollx} />
      </View>

      <View className="flex-1 h-[10%] ">
        {currentIndex === onboardingSlides.length - 1 ? (
          <>
            <TouchableOpacity
              className="bg-orange-500  rounded-[100px]  p-5"
              activeOpacity={0.7}
              onPress={handleNextButton}
            >
              <AntDesign name="arrowright" size={32} color="white" />
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#007AFF", // Customize the button style
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },

  buttonContainer: {
    borderRadius: 25,
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
});

export default Onboarding;
