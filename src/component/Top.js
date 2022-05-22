import React from 'react'
import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'
function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src='/images/20181208_120727.jpg'
            alt='logo'
            style={{ display: 'block', width: '80px' }}
          />
        </div>
        <Header as="h1">hi</Header>
      </div>
      <Gnb />
    </div>
  )
}

export default Top