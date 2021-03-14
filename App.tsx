import "./wdyr";

import React, { memo, useState, useCallback, useRef } from "react";
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

  const valueRef = useRef<string>("");
  valueRef.current = value;
  const sendRequest = useCallback(() => {
    console.log("value = ", valueRef.current);
  }, []);

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
      <VeryHeavyComponent {...{ sendRequest }} />
    </View>
  );
}

interface Props {
  sendRequest: () => void;
}
const VeryHeavyComponent = memo(({ sendRequest }: Props) => {
  console.log("rerendered");
  return (
    <TouchableHighlight onPress={sendRequest}>
      <Text>I am heavy</Text>
    </TouchableHighlight>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
