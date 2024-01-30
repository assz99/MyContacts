import PropTypes from 'prop-types'
import { ReactDOM } from 'react'
import { Container, Footer, Overlay } from './styles'
import Button from '../Button'
export default function Modal ({ danger }) {
  return ReactDOM.createPortal(
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
    </Overlay>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
