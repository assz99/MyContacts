import { createGlobalStyle } from 'style-components'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;

}

body{
  background: ${({ theme }) => theme.backgroudColor};
  font-size: 16px;
}

button{
  cursor: pointer;
}
`
