import { useState } from "react";
import "./App.css";
import Page from "./component/useContext.jsx/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"고객"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
