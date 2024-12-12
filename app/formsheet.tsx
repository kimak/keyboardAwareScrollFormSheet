import { Dimensions, View } from "react-native";
import KeyboardDemo from "./components/KeyboardDemo";

export default function FormSheet() {
  return (
    <KeyboardDemo placeholder="Keyboard Failing with TextInput ❌">
      {/** hack to move the input as there is an issue with presentation:formSheet not centering the view */}
      <View style={{ height: Dimensions.get("screen").height / 2 }} />
    </KeyboardDemo>
  );
}
