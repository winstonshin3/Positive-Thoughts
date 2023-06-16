import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function FeedScreenFive() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tags}>#default</Text>
      </View>
      <Text style={styles.description}>Description</Text>
    </ScrollView>
  );
}

export default FeedScreenFive;

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
    padding: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: GlobalStyles.colors.primary500,
    margin: 20,
  },
  title: {
    color: GlobalStyles.colors.accent500,
    fontSize: 30,
    fontWeight: "bold",
  },
  tagsContainer: { marginVertical: 5 },
  tags: { color: GlobalStyles.colors.primary200 },
  description: { color: GlobalStyles.colors.accent500, fontSize: 16 },
});
