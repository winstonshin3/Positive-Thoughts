import { Pressable, View, Text, StyleSheet } from "react-native";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";

/**
 *
 * @param {*} param0
 * @returns
 */
function MyStoryItem({ id, title, date }) {
  /**
   * id is passed down from MyStoryList and again passed to MyStoryScreen
   */
  const navigation = useNavigation();
  function storyPressHandler() {
    navigation.navigate("MyStoryScreen", { storyId: id });
  }

  return (
    <View style={styles.storyItem}>
      <Pressable
        onPress={storyPressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MyStoryItem;

const styles = StyleSheet.create({
  storyItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
  },
  date: {
    color: GlobalStyles.colors.accent500,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
