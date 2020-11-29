import { ThemeProvider } from '@material-ui/core';
import theme from './MUI theme';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Articles from './components/Articles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Header />
        <Articles />
      </div>
    </ThemeProvider>
  );
}

export default App;
