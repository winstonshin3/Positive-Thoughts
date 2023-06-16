import { View, StyleSheet, Text, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function MyStoriesDetails({ currentStory }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentStory.title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date}>
          Composed: {getFormattedDate(currentStory.date)}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{currentStory.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default MyStoriesDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
  textContainer: {
    paddingBottom: 8,
    marginTop: 8,
    marginHorizontal: 8,
  },
  date: {
    color: GlobalStyles.colors.primary200,
  },
  description: {
    fontSize: 16,
    color: GlobalStyles.colors.accent500,
  },
});
