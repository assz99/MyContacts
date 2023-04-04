import { Container, InpurSearchContainer } from './styles'

import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} width='201' />

      <InpurSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome...' ></input>
      </InpurSearchContainer>
    </Container>
  )
}
