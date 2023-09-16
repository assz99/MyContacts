import { Card, Container, Header, ListContainer } from './styles'

import arrow from '../../assets/images/icon/arrow.svg'
import edit from '../../assets/images/icon/edit.svg'
import trash from '../../assets/images/icon/trash.svg'

export default function ContactList () {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href='/'>Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type='button' className='sort-button'>
            Nome
            <img src={arrow} atl='Arrow' />
          </button>
        </header>

        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Renan Guides</strong>
              <small>instagram</small>
            </div>
            <span>renanguides@devvacadem.com.br</span>
            <span>(65)99999-9999</span>
          </div>
          <div className='actions'>
            <a href='/'>
              <img src={edit} atl='Edit' />
            </a>
            <button type='button'>
              <img src={trash} atl='Delete' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
