import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./IconButton";

function CreditCounter({ count, style }) {
  return (
    <View style={[styles.container, style]}>
      <Ionicons
        name={"ribbon-outline"}
        size={20}
        color={GlobalStyles.colors.gray700}
      />
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}

export default CreditCounter;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  text: {
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
    fontSize: 12,
  },
});
