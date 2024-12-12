import { Link } from "expo-router";
import KeyboardDemo from "./components/KeyboardDemo";

export default function HomeScreen() {
  return (
    <KeyboardDemo placeholder="Keyboard Working with TextInput ✅">
      <Link href={"/formsheet"} style={{padding: 20}}>Open Form Sheet</Link>
      <Link href={"/modal"} style={{padding: 20}}>Open Modal</Link>
    </KeyboardDemo>
  );
}