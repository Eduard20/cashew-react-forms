import React, { ReactElement, useState } from 'react'
import * as Styled from './styled'
import Form from './form'
import Success from './success'

const Root = (): ReactElement => {
  const [isSubmited, handleForm] = useState(false)
  return (
    <Styled.Container>
      {isSubmited ? <Success /> : <Form handleForm={() => handleForm(true)} />}
    </Styled.Container>
  )
}

export default Root
