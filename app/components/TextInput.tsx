import { TextInput as RNTextInput, View } from "react-native";

export const TextInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <RNTextInput
      multiline={true}
      placeholder={placeholder}
      placeholderTextColor="#999"
      style={{
        borderWidth: 2,
        borderColor: "#000",
        padding: 10,
        borderRadius: 10,
      }}
    />
  );
};
