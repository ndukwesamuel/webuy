import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { products } from "../components/homecomonents/HomeData";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";

const categories = ["Home", "Fashion", "Sports", "Health", "Electronics"];

const Search = () => {
  const route = useRoute();
  const { category } = route.params || {};

  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const searchTextMatch =
      searchText === "" ||
      product.title.toLowerCase().includes(searchText.toLowerCase());
    const priceRangeMatch =
      (!minPrice || product.price >= parseInt(minPrice)) &&
      (!maxPrice || product.price <= parseInt(maxPrice));

    return categoryMatch && searchTextMatch && priceRangeMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const toggleCategory = (cat) => {
    setSelectedCategory(cat === selectedCategory ? "" : cat);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ECEBE4]">
      <View className="flex-1">
        <View className="flex-row items-center bg-white rounded-lg p-2 mx-5 mt-3 ">
          <AntDesign name="search1" size={20} color="#888" />
          <TextInput
            className="flex-1 ml-2 text-sm border-none"
            placeholder="Search products..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <View className="flex-row w-full">
          <View className="w-[30%] h-full border-[1px] pt-3 border-orange-500 px-1 mt-4 rounded-lg">
            <View>
              <TextInput
                placeholder="Min price..."
                value={minPrice}
                onChangeText={(text) => setMinPrice(text)}
                keyboardType="numeric"
                className="px-4 my-2 border-[1px] border-orange-500"
              />
              <TextInput
                placeholder="Max price..."
                value={maxPrice}
                onChangeText={(text) => setMaxPrice(text)}
                keyboardType="numeric"
                className="px-4 my-2 border-[1px] border-orange-500"
              />
            </View>

            <View>
              {categories.map((cat) => (
                <TouchableOpacity
                  className="my-3 border-orange-500"
                  key={cat}
                  style={[
                    styles.categoryButton,
                    cat === selectedCategory && styles.selectedCategoryButton,
                  ]}
                  onPress={() => toggleCategory(cat)}
                >
                  <Text className="text-center">{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="w-[70%] mt-4">
            <View className="h-[86%]">
              <FlatList
                numColumns={2}
                data={currentItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard product={item} />}
              />
            </View>

            <View className="h-[15%]">
              <View style={styles.pagination}>
                {Array.from(
                  { length: Math.ceil(filteredProducts.length / itemsPerPage) },
                  (_, index) => (
                    <TouchableOpacity
                      className="px-1 rounded-sm"
                      key={index}
                      style={[
                        styles.pageButton,
                        currentPage === index + 1 && styles.selectedPageButton, // Added style for selected page
                      ]}
                      onPress={() => paginate(index + 1)}
                    >
                      <Text>{index + 1}</Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder="Min price..."
            value={minPrice}
            onChangeText={(text) => setMinPrice(text)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Max price..."
            value={maxPrice}
            onChangeText={(text) => setMaxPrice(text)}
            keyboardType="numeric"
          />
          <View style={styles.categoryButtons}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryButton,
                  cat === selectedCategory && styles.selectedCategoryButton,
                ]}
                onPress={() => toggleCategory(cat)}
              >
                <Text>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            title="Search"
            onPress={() => console.log(filteredProducts)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  selectedCategoryButton: {
    backgroundColor: "orange",
  },
  productItem: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginVertical: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  pageButton: {
    marginHorizontal: 5,
  },
  selectedPageButton: {
    backgroundColor: "orange", // Added color for selected page button
  },
});

export default Search;
