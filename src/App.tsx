import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/Dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
