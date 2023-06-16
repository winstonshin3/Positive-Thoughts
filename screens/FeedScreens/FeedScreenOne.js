import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function FeedScreenOne() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Story of Creation</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tags}>#raventales #tlingit</Text>
      </View>
      <Text style={styles.description}>
        The name of Raven is Kit-ka'ositiyi-qa-yit, son of Kit-ka'ositiyiqa.
        Raven was instructed from birth by his father in every subject so that
        the raven could make a world; after trying many different ways, the
        raven was finally successful. The raven started by creating light. Raven
        had heard that a wealthy man was living atop a hill who had a light but
        did not let it out for the world to see. Raven tried many ways to get
        into the house to obtain the light and finally devised a plan that would
        work. Raven transformed himself into a speck of dirt and placed himself
        in a glass of water from which the man's daughter was drinking. The girl
        drank the speck of dirt and, in this way, became pregnant.
      </Text>
    </ScrollView>
  );
}

export default FeedScreenOne;

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
