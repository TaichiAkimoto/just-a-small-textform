import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { App } from "./App";

test("テキストフォームと送信ボタンが表示される", () => {
  const { queryByPlaceholderText, getByTestId, getByDisplayValue } = render(
    <App />
  );

  // 初期テキストフォームは空でplaceHolderが表示される
  const initialTextInput = queryByPlaceholderText("入力して下さい");
  expect(initialTextInput).toBeDefined();

  // テキストフォームが空の時、送信ボタンはdisableされている
  const requestButton = getByTestId("requestButton");
  expect(requestButton).toBeDefined();
  expect(requestButton).toBeDisabled();

  // テキストフォームに入力
  fireEvent(initialTextInput, "onChangeText", "hoge");

  // テキストフォームが入力されると、送信ボタンをenable
  const inputTextInput = getByDisplayValue("hoge");
  expect(inputTextInput).toBeDefined();
  expect(requestButton).toBeEnabled();
});
