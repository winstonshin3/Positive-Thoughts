import { View, StyleSheet } from "react-native";
import MyStoriesList from "../components/MyStories/MyStoriesList";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { StoriesContext } from "../store/stories-context";

/**
 * @returns a MyStoriesList of MyStoryItems.
 */
function MyStoriesScreen() {
  const storiesCtx = useContext(StoriesContext);

  return (
    <View style={styles.root}>
      <MyStoriesList stories={storiesCtx.stories} />
    </View>
  );
}

export default MyStoriesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
});
