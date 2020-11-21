import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from 'pages/root'
import { ResetStyles } from './reset'

ReactDOM.render(
  <>
    <ResetStyles />
    <Root />
  </>,
  document.getElementById('root')
)
