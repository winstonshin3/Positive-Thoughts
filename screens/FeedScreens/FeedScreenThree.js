import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function FeedScreenThree() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Residential Schools in Canada</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tags}>#indigenous #canada #generationaltrauma</Text>
      </View>
      <Text style={styles.description}>
        Residential schools were government-sponsored religious schools that
        were established to assimilate Indigenous children into Euro-Canadian
        culture. Although the first residential facilities were established in
        New France, the term usually refers to schools established after 1880.
        Residential schools were created by Christian churches and the Canadian
        government as an attempt to both educate and convert Indigenous youth
        and to assimilate them into Canadian society. However, the schools
        disrupted lives and communities, causing long-term problems among
        Indigenous peoples. The last residential school closed in 1996.
        (Grollier Hall, which closed in 1997, was not a state-run residential
        school in that year.) Since then, former students have demanded
        recognition and restitution, resulting in the Indian Residential Schools
        Settlement Agreement in 2007 and a formal public apology by Prime
        Minister Stephen Harper in 2008. In total, an estimated 150,000 First
        Nation, Inuit, and Métis children attended residential schools. (See
        also Inuit Experiences at Residential School and Métis Experiences at
        Residential School.)
      </Text>
    </ScrollView>
  );
}

export default FeedScreenThree;

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
