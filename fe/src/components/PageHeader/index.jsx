import { PropTypes } from 'prop-types'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icon/arrow.svg'

export default function PageHeader ({ title }) {
  return (
    <Container>
      <Link to='/'>
        <img src={arrow} />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}
