import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNav from "./app.nav";
import { AuthProvider } from "./app/context/auth.context";

export default function App() {
  // AsyncStorage.clear();

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
