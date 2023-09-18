import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'

export default function NewContact () {
  return (
    <>
      <PageHeader title='Novo Contato' />
      <Input type='next' placeholder='Nome' />
      <Select>
        <option value='123'>Face</option>
      </Select>
    </>
  )
}
