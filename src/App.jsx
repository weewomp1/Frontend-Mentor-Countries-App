import {usesState} from 'react'
import {styled, css} from '../stitches.config..js'
import {Container, CountriesContainer} from './AppStyles'
import Country from './components/country/Country.jsx'
import NavBar from './components/nav/NavBar.jsx'

function App() {
  
    return (
      <Container>
        <NavBar></NavBar>
        <CountriesContainer>
            
        </CountriesContainer>
      </Container>
    )
  }
  
  export default App