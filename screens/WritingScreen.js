import { StoriesContext } from "../store/stories-context";
import { useContext } from "react";

import WritingForm from "../components/WritingOutput/WritingForm";

/**
 * @param navigation could be from MyStoriesScreen Or MyStoryScreen.
 * If from MyStoriesScreen it is to add brand-new story.
 * If from MyStoryScreen it is to edit a currently existing story.
 * @param route if navigation is from MyStoryScreen, route contains the storyId
 * of the story to be edited.
 */
function WritingScreen({ navigation, route }) {
  const storiesCtx = useContext(StoriesContext);
  const editedStoryId = route.params?.id;
  const isEditing = !!editedStoryId;

  const selectedStory = storiesCtx.stories.find(
    (story) => story.id == editedStoryId
  );

  function confirmHandler(storyData) {
    if (isEditing) {
      storiesCtx.updateStory(editedStoryId, storyData);
    } else {
      storiesCtx.addStory(storyData);
    }
    navigation.goBack();
  }

  function saveHandler(storyData) {
    if (isEditing) {
      storiesCtx.updateStory(editedStoryId, storyData);
    } else {
      storiesCtx.addStory(storyData);
    }
  }

  return (
    <WritingForm
      submitButtonLabel={isEditing ? "Finish" : "Add"}
      onSubmit={confirmHandler}
      defaultValues={selectedStory}
      onSave={saveHandler}
    ></WritingForm>
  );
}

export default WritingScreen;
