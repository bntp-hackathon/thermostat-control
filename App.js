import AppNav from "./app.nav";
import { AuthProvider } from "./app/context/auth.context";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}
