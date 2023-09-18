import {
  Card,
  Container,
  Header,
  InpurSearchContainer,
  ListContainer
} from './styles'

import arrow from '../../assets/images/icon/arrow.svg'
import edit from '../../assets/images/icon/edit.svg'
import trash from '../../assets/images/icon/trash.svg'

export default function Home () {
  return (
    <Container>
      <InpurSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome...'></input>
      </InpurSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <a href='/'>Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type='button' className='sort-button'>
            <span>Nome</span>
            <img src={arrow} atl='Arrow' />
          </button>
        </header>

        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Renan Guides</strong>
              <small>instagram</small>
            </div>
            <span>renanguides@devacademy.com.br</span>
            <span>(65)99999-9999</span>
          </div>
          <div className='actions'>
            <a href='/'>
              <img src={edit} atl='Edit' />
            </a>
            <button className='button' type='button'>
              <img src={trash} atl='Delete' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
