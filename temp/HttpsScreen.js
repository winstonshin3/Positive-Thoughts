import { StyleSheet, View, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import { OpenAIApi, Configuration } from "openai";

import Button from "../UI/Button";

function HttpsScreen({ navigation, route, aiHandler }) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const input = route.params.content;
  const [output, setOutput] = useState(
    "\nTap the button above for ideas! Remember to save before."
  );

  const inputHandler = async () => {
    try {
      setOutput("\n...loading...");
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Give three suggestions on how to continue this journal entry: ${input}`,
        temperature: 0,
        max_tokens: 100,
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

  function iconHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.visible}>
      <Text style={styles.text}>You can continue by writing about:</Text>
      <Text style={styles.data}>{output}</Text>

      <View style={styles.lightbulb}>
        <Button onPress={inputHandler}>Generate Suggestions</Button>
      </View>

      <View style={styles.lightbulb}>
        <IconButton
          icon="close-outline"
          color={GlobalStyles.colors.accent500}
          size={36}
          onPress={iconHandler}
        />
      </View>
    </View>
  );
}

export default HttpsScreen;

const styles = StyleSheet.create({
  text: { color: GlobalStyles.colors.accent500 },
  data: {
    color: GlobalStyles.colors.accent500,
    textAlign: "center",
    paddingBottom: 20,
  },
  response: { color: GlobalStyles.colors.accent500 },
  visible: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
