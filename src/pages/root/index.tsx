import React, { ReactElement } from 'react'
import * as Styled from './styled'
import { useForm } from 'react-hook-form'

type FormDataType = {
  email: string
  firstName: string
  lastName: string
  mobileNumber?: string
}

type ErrorType = {
  type: string
  message: string
}

const Root = (): ReactElement => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: FormDataType) => console.log(data)
  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cashew Registration Form</h2>
        <Styled.Input
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register({ required: 'First name is required', maxLength: 80 })}
        />
        <Styled.Input
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register({ required: 'Last name is required', maxLength: 100 })}
        />
        <Styled.Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Must be valid Email',
            },
          })}
        />
        <Styled.Input
          type="tel"
          placeholder="Mobile number"
          name="mobileNumber"
          ref={register({
            required: false,
            minLength: {
              value: 6,
              message: 'The length should be from 6 to 12',
            },
            maxLength: {
              value: 12,
              message: 'The length should be from 6 to 12',
            },
            pattern: {
              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              message: 'Must be a valid mobile number',
            },
          })}
        />
        {Object.values(errors).map((error: ErrorType) => (
          <Styled.P key={error.message}>{error.message}</Styled.P>
        ))}
        <Styled.Button type="submit">Submit</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  )
}

export default Root
