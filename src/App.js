import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex w-full">
      <Menu
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="flex-[0.9] ">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Wrapper
          darkMode={darkMode}
          setDarkMode={setDarkMode}

        />
      </div>

    </div>
  );
}

export default App;
