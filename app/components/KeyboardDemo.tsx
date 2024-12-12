import { StyleSheet, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { TextInput } from "./TextInput";
import { ReactNode } from "react";

export default function KeyboardDemo({
  placeholder,
  children,
}: {
  placeholder: string;
  children?: ReactNode;
}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      {children}
      <TextInput placeholder={placeholder} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
