import './App.css';
import { useState } from 'react';
import DarkMode from './components/DarkMode';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// let name = "Parth";

function App() {
  const [theme, setTheme] = useState("light")
  const [themeText, setThemeText] = useState("Enable Dark Theme")

  const [navStyle, setNavStyle] = useState({
    border: 'none'
  })


  function toggleMode() {

    if (theme === 'light') {
      document.body.style.backgroundColor = '#003d57';
      setThemeText("Enable Light Theme")
      setTheme("dark")
      setNavStyle({
        border: '2px solid #ffa5006e',

      })
      setAlert("Dark theme enabled", 'success')
    }

    else if (theme === 'dark') {
      document.body.style.backgroundColor = 'white';
      setThemeText("Enable Dark Theme")
      setTheme("light")
      setNavStyle({
        border: 'none'
      })
      setAlert("Light theme enabled", 'success')
    }

  }

  const [alertText, setAlertText] = useState(null)

  function setAlert(message, type) {
    setAlertText({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlertText(null)
    }, 2500);
  }
  return (
    <>
      <Router>

        {/* <div className="blank">Hello {name}</div> */}
        <Navbar searchText="Search" appName="My app" mode={theme} toggleMode={toggleMode} themeText={themeText} navStyle={navStyle} />
        <Alert alertText={alertText} />
        <Routes>
          <Route exact path="/" element={<Form head="Enter your text to analyse" mode={theme} upperText="Convert to Uppercase" lowerText="Convert to Lowercase" clrText="Clear text" cpyText="Copy Text" selectText="Select Text" setAlert={setAlert} />} />

          <Route exact path="/dark" element={<DarkMode />} />

          {/* Use exact path -> It jumps to exact url (or path)
          path -> It does partial matching (/users can match with with /users/home ) */}
        </Routes>

      </Router>

    </>
  );
}

export default App;
