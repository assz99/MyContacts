import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styled'

import { Header } from '../Header'
import { ThemeProvider } from 'styled-components'
import Routes from '../../Routes'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
