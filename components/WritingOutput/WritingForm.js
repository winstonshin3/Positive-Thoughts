import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { OpenAIApi, Configuration } from "openai";
import IconButton from "../../UI/IconButton";
import Button from "../../UI/Button";

/**
 * This component is called from WritingScreen.js
 */
function WritingForm({ onSubmit, submitButtonLabel, defaultValues, onSave }) {
  const navigation = useNavigation();

  const [inputValues, setInputValues] = useState({
    title: defaultValues ? defaultValues.title : "",
    description: defaultValues ? defaultValues.description : "",
  });

  /**
   * Get a OpenAI API key and assign it below.
   */
  const configuration = new Configuration({
    apiKey: "insertapikeyhere",
  });
  const openai = new OpenAIApi(configuration);

  const [output, setOutput] = useState("\nTap the button below to start!");

  const input = inputValues.description;

  const inputHandler = async () => {
    try {
      setOutput("\nNeed API key in WritingForm.js; line 22.");
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Give three suggestions on how to continue this journal entry: ${input}`,
        temperature: 0,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["Give three suggestions on how to continue this journal entry:"],
      });
      setOutput(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currInputValues) => {
      return { ...currInputValues, [inputIdentifier]: enteredValue };
    });
  }

  function submitHandler() {
    const storyData = {
      title: inputValues.title,
      description: inputValues.description,
      date: defaultValues ? defaultValues.date : new Date(),
    };
    setInputValues(() => {
      return { title: "", description: "" };
    });
    onSubmit(storyData);
  }

  function saveHandler() {
    const storyData = {
      title: inputValues.title,
      description: inputValues.description,
      date: defaultValues ? defaultValues.date : new Date(),
    };
    onSave(storyData);
  }

  function goBackButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.storyContainer}>
        <ScrollView>
          <Input
            textInputConfig={{
              placeholder: "Enter title here",
              placeholderTextColor: GlobalStyles.colors.primary200,
              onChangeText: inputChangedHandler.bind(this, "title"),
              value: inputValues.title,
              multiline: true,
              fontWeight: "bold",
              fontSize: 24,
            }}
          />
          <Input
            textInputConfig={{
              placeholder: "Enter description here",
              placeholderTextColor: GlobalStyles.colors.primary200,
              multiline: true,
              onChangeText: inputChangedHandler.bind(this, "description"),
              value: inputValues.description,
            }}
          />

          <View style={styles.lightbulb}>
            <IconButton
              icon="bulb-outline"
              color={GlobalStyles.colors.accent500}
              size={36}
              onPress={inputHandler}
            />
          </View>

          <View>
            <Text style={styles.data}>{output.trim()}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
        <Button
          onPress={saveHandler}
          style={[styles.button, styles.buttonMiddle]}
        >
          Save
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

export default WritingForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

    backgroundColor: GlobalStyles.colors.primary700,
  },
  storyContainer: {
    flex: 10,
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: GlobalStyles.colors.primary500,
    margin: 20,
    marginTop: 50,
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
  },
  buttonMiddle: {
    backgroundColor: GlobalStyles.colors.primary500,
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
  lightbulb: {
    marginTop: 16,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    color: GlobalStyles.colors.accent500,
    textAlign: "center",
    paddingBottom: 20,
  },
});
