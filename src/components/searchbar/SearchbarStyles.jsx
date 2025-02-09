import { css } from '@stitches/react'
import { styled } from '../../../stitches.config.'

export const SearchBarStyles = styled('input', {
    minHeight: '100%',
    border: 'none',
})

export const SearchBarContainer = styled('div', {
    marginTop: '1.5rem',
    width: '100%',
    minHeight: '3rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'White',
    paddingLeft: '2rem',
    gap: '1.625rem',
    '&:focus': {
        border: 'none',
        outline: 'none'
    }
})