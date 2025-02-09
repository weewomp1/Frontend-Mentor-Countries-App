import {useState} from 'react'
import {styled, css} from '../stitches.config..js'
import {Container, CountriesContainer, SettingsContainer} from './AppStyles'
import Country from './components/country/Country.jsx'
import NavBar from './components/nav/NavBar.jsx'
import SearchBar from './components/searchbar/Searchbar.jsx'
import Dropdown from './components/dropdown/Dropdown.jsx'

function App() {
    async function getCountries(){
        
    }
    async function getSpecificCountry(){

    }
    const countryisselected = false;

    const [contryselected, setcountryselected] = useState('')
    const [countries, setcountries] = useState([])
    return (
      <Container>
        <NavBar></NavBar>
        <SettingsContainer>
        <SearchBar></SearchBar>
        <Dropdown />
        </SettingsContainer>
        <CountriesContainer>
        
        </CountriesContainer>
      </Container>
    )
  }
  
  export default App