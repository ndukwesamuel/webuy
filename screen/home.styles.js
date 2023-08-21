import { StyleSheet } from "react-native";

import { COLORS, Colors, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 20,
    marginTop: SIZES.small,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },

  cartCount: {
    position: "absolute",
    bottom: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },

  cartNumber: {
    fontFamily: "regular",
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationButton: {
    padding: 5,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  activePaginationButton: {
    backgroundColor: "blue",
    color: "white",
  },
  paginationButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;
