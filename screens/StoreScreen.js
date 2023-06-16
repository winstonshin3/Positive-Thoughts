import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";

import CreditCounter from "../UI/CreditCounter";

function StoreScreen() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.bountyContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>Bounties</Text>
          <Text style={styles.subtext}>
            Earn rewards by writing these prompts!
          </Text>
        </View>

        <View style={styles.textContainer}>
          <CreditCounter
            name={"ribbon-outline"}
            size={20}
            color={GlobalStyles.colors.gray700}
            count={10}
          />
          <Text style={styles.text}>
            How would you spend your perfect day off? What makes that perfect
            for you?
          </Text>
        </View>

        <View style={styles.textContainer}>
          <CreditCounter
            name={"ribbon-outline"}
            size={20}
            color={GlobalStyles.colors.gray700}
            count={10}
          />
          <Text style={styles.text}>
            Explain what’s hardest for you in as many words as it takes.
          </Text>
        </View>

        <View style={styles.textContainer}>
          <CreditCounter
            name={"ribbon-outline"}
            size={20}
            color={GlobalStyles.colors.gray700}
            count={10}
          />
          <Text style={styles.text}>
            What are five things about yourself you want people to know?
          </Text>
        </View>
      </View>

      <View style={styles.bountyContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>Cosmetics</Text>
          <Text style={styles.subtext}>Coming soon!!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default StoreScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: GlobalStyles.colors.primary700 },
  bountyContainer: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 20,
    margin: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: GlobalStyles.colors.accent500,
  },
  subtext: { color: GlobalStyles.colors.gray700, textAlign: "center" },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: GlobalStyles.colors.accent500,
  },
});
