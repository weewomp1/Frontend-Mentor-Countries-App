import { css } from '@stitches/react'
import { styled } from '../../../stitches.config.'

export const NavBarContainer = styled('div', {
    padding: '1rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    minHeight: '5rem',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const NavBarTitle = styled('div', {
   '@mobile': { 
    fontSize: '$h4',
    fontFamily: '$NunintoSans',
    color: 'black900',
    fontWeight: '800'
    }
})

export const DarkModeButton = styled('button',{
    border: 'none',
    margin: '0',
    padding: '0',
    width: 'auto',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'row',
    gap: '.5rem',
    '&:hover': {
        textDecoration: 'underline'
    }
})