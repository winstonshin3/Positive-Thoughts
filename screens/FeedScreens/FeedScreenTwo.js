import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function FeedScreenTwo() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AITA for Posting Videos?</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tags}>#AITA #family #videos</Text>
      </View>
      <Text style={styles.description}>
        My sister Angel claims to use “hands-off parenting” with my niece Sofia
        and nephew Parker. In actuality, Angel is entirely permissive and
        refuses to discipline them. She expects other adults to step in when
        Sofia and Parker’s behavior is getting out of hand. For this reason, I
        asked Angel to get a babysitter for Sofia and Parker if she wanted to
        attend my 27th birthday. I love Sofia and Parker as their aunt. And at
        the same time, I want a peaceful evening to celebrate my birthday
        instead of dealing with Sofia and Parker’s behavior, because I know
        Angel isn’t going to discipline them herself.
      </Text>
    </ScrollView>
  );
}

export default FeedScreenTwo;

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
