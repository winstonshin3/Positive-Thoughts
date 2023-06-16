import { View, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.textContainer, style]}>
      <TextInput style={inputStyles} {...textInputConfig}></TextInput>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent500,
    paddingBottom: 8,
    marginTop: 8,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary500,
    color: GlobalStyles.colors.accent500,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 40,
    textAlignVertical: "top",
  },
});
