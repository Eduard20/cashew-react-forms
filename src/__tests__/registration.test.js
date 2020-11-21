import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Root from 'pages/root'
import React from 'react'

describe('Root', () => {
  beforeEach(() => {
    render(<Root />)
  })

  it('Fire button on empty state', async () => {
    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(3)
  })
  it('Fire button on First name', async () => {
    const input = screen.getByTestId('firstName')
    fireEvent.change(input, { target: { value: 'Test' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(2)
  })
  it('Fire button on Last name and First name', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(1)
  })
  it('Fire button on Last name, First name and Email (not valid)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(1)
  })
  it('Fire button on Last name, First name and Email (valid)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })

    fireEvent.click(screen.getByRole('button'))
    const text = await waitFor(() => screen.getByText('Thanks for submission'))

    expect(text).toBeTruthy()
  })
  it('Fire button on Last name, First name, Email and Mobile (less then 6 numbers)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    const inputMobile = screen.getByTestId('mobileNumber')
    fireEvent.change(inputMobile, { target: { value: '8988' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(1)
  })
  it('Fire button on Last name, First name, Email and Mobile (more then 12 numbers)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    const inputMobile = screen.getByTestId('mobileNumber')
    fireEvent.change(inputMobile, { target: { value: '8983853232392392592328' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(1)
  })
  it('Fire button on Last name, First name, Email and Mobile (between 6 - 12 numbers)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    const inputMobile = screen.getByTestId('mobileNumber')
    fireEvent.change(inputMobile, { target: { value: '898385323239' } })

    fireEvent.click(screen.getByRole('button'))
    const text = await waitFor(() => screen.getByText('Thanks for submission'))

    expect(text).toBeTruthy()
  })
  it('Fire button on Last name, First name, Email and Mobile (not valid)', async () => {
    const inputFirstName = screen.getByTestId('firstName')
    fireEvent.change(inputFirstName, { target: { value: 'Test' } })
    const inputLastName = screen.getByTestId('lastName')
    fireEvent.change(inputLastName, { target: { value: 'Test' } })
    const inputEmail = screen.getByTestId('email')
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    const inputMobile = screen.getByTestId('mobileNumber')
    fireEvent.change(inputMobile, { target: { value: 'wefewfwefw' } })

    fireEvent.click(screen.getByRole('button'))
    const items = await waitFor(() => screen.getAllByTestId('error-message'))
    expect(items.length).toEqual(1)
  })
})
