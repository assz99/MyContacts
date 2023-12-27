import PropTypes from 'prop-types'
import { Container, Footer, Overlay } from './styles'
import Button from '../Button'
export default function Modal ({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1></h1>
        <p></p>
        <Footer>
          <button type='button' className='cancel-button'>
            Cancelar
          </button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
