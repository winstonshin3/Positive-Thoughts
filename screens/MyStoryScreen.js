import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { StoriesContext } from "../store/stories-context";

import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import MyStoriesDetails from "../components/MyStories/MyStoryDetails";

function MyStoryScreen({ route, navigation }) {
  const currentStoryId = route.params.storyId;
  const storiesCtx = useContext(StoriesContext);
  const currentStory = storiesCtx.stories.find(
    (story) => story.id === currentStoryId
  );

  function editButtonHandler() {
    navigation.navigate("WritingScreen", { id: currentStoryId });
  }

  function deleteButtonHandler() {
    storiesCtx.deleteStory(currentStoryId);
    navigation.goBack();
  }

  function goBackButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.storyContainer}>
        <MyStoriesDetails currentStory={currentStory} />
      </View>

      <View style={styles.buttons}>
        <Button mode="flat" onPress={deleteButtonHandler} style={styles.button}>
          Delete
        </Button>
        <Button onPress={editButtonHandler} style={styles.button}>
          Edit
        </Button>
        <View style={styles.buttonSpecial}>
          <IconButton
            icon={"close-outline"}
            size={20}
            color={GlobalStyles.colors.accent500}
            onPress={goBackButtonHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default MyStoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  storyContainer: {
    flex: 10,
    padding: 12,
    marginTop: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: GlobalStyles.colors.primary500,
    margin: 20,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    minWidth: 95,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  buttonSpecial: {
    minWidth: 95,
    marginHorizontal: 8,
    backgroundColor: GlobalStyles.colors.primary200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
