import { css } from '@stitches/react'
import { styled } from '../stitches.config..js'

export const Container = styled('div', {
   '@mobile': {
      minHeight: '100vh',
      width: '100vw',
      background: '$grey300',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '10px 10px 10px black'
   },
   '@desktop': {
      minHeight: '100vh',
      width: '100vw',
      background: 'red',
      display: 'flex',
      flexDirection: 'column'
   }
})

export const CountriesContainer = styled('div', {
   width: '100vw',
   minHeight: 'min-content',
   padding: '1rem',
   background: '$grey300',
})

export const SettingsContainer = styled('div', {
   width: '100vw',
   height: 'min-content',
   paddingLeft: '1rem',
   paddingRight: '1rem'

})