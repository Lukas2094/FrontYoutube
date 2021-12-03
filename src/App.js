import './App.css';
import  React , {useState} from 'react';
import reactDom from 'react-dom';
import {ThemeProvider , createMuiTheme, makeStyles} from '@material-ui/core'; // 75.5k (gzipped : 24.2k)
import Home from './Home';

function App() {

  const[darkMode, setDarkMode] = useState(false);


  const theme = createMuiTheme({
    spacing: 4,
    palette: {
       type: darkMode ? 'dark' : 'light',
       primary: {
         main: '#f44336',
       },
       secondary: {
         main : '#3EA6FF'
       },
       background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#faf6f48',
        paper: darkMode ? '#232323' : '#FFF', 
       },
    }
  });

  return (
    <ThemeProvider theme={theme}>
       <Home darkMode={darkMode} setDarkMode={setDarkMode}></Home>
    </ThemeProvider>
  );
}

export default App;
