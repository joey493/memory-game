import useLocalStorage from './customHooks/useLocalStorage';
import { ThemeProvider } from 'styled-components'

import Header from './components/Header';
import Info from './components/Info';
import CardsContainer from './components/CardsContainer';

import {
  FaSun,
  FaMoon 
} from 'react-icons/fa'
  
import mainTheme, {dark, light} from './styles/theme';
import { ThemeToggle } from './styles/Header.styled';
import Container from './styles/Container.styled';
import GlobalStyles, {Footer} from './styles/global.styles';


function App() {
  const [mode, setMode] = useLocalStorage('mode', '')

  const handleClick = () => {
    mode.id === 'light' 
    ? setMode(dark)
    : setMode(light)
  }

  return (
    <ThemeProvider theme={{mainTheme, clrTheme:mode}}>
      <Header>
        <ThemeToggle onClick={handleClick}>{
            mode.id === 'light'
            ? <FaMoon/>
            : <FaSun/>
        }</ThemeToggle>
      </Header>
      <Container>
        <Info />
        <CardsContainer/>
      </Container>
      <Footer>
        Copyright &copy; 2022 All Rights Reserved
      </Footer>
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
