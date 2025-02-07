import { css } from '@stitches/react'
import { styled } from '../stitches.config..js'

export const Container = styled('div', {
   '@mobile': {
      padding: '1rem',
      minHeight: '100vh',
      width: '100vw',
      background: 'blue'
   },
   '@desktop': {
      padding: '1rem',
      minHeight: '100vh',
      width: '100vw',
      background: 'red'
   }
})