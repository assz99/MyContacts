import { ThemeProvider } from 'style-components'

import GlobalStyles from '../../assets/style/global'
import defaultTheme from '../../assets/style/theme/default'
import { Container } from './styled';
import { Header } from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider >
  );
}

export default App;
