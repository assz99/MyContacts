import {
  Card,
  Container,
  Header,
  InpurSearchContainer,
  ListContainer
} from './styles'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icon/arrow.svg'
import edit from '../../assets/images/icon/edit.svg'
import trash from '../../assets/images/icon/trash.svg'
import Modal from '../../components/Modal'

export default function Home () {
  return (
    <Container>
      <Modal danger />
      <InpurSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome...'></input>
      </InpurSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to='/new'>Novo contato</Link>
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
            <Link to='/edit/123'>
              <img src={edit} atl='Edit' />
            </Link>
            <button className='button' type='button'>
              <img src={trash} atl='Delete' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
