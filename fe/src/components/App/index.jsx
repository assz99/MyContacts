import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styled'

import { Header } from '../Header'
import { ThemeProvider } from 'styled-components'
import ContactList from '../ConstactsList'

function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </ThemeProvider>
  )
}

export default App
