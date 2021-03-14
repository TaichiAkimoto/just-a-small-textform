import "./wdyr";

import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [value, setValue] = useState<string>("");
  const onChangeText = useCallback((e: string) => {
    setValue(e);
  }, []);

  const sendRequest = useCallback(() => {
    console.log("value = ", value);
  }, [value]);

  const disabled = !value;
  return (
    <View style={styles.container}>
      <TextInput placeholder="入力して下さい" {...{ value, onChangeText }} />
      <TouchableHighlight
        {...{ disabled }}
        onPress={sendRequest}
        testID="requestButton"
      >
        <Text>送信する</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
