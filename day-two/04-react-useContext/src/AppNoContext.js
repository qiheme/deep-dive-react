import Toolbar from "./ToolbarNoContext";
import "./App.css";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

function App() {
  return <Toolbar theme={themes.light} />;
}

export default App;
