import { ThemeProvider } from 'style-components'

import GlobalStyles from './assets/style/global'
import defaultTheme from './assets/style/theme/default'

function App() {
  return (
    <ThemeProvider theme={default}>
      <GlobalStyles />
      <h1>My Contacts</h1>
    </ThemeProvider >
  );
}

export default App;
