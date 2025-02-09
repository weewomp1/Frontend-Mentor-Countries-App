import Search from '../../assets/search'
import { SearchBarStyles, SearchBarContainer } from './SearchbarStyles'


export const SearchBar = () => {
    console.log(SearchBarStyles)
    return (
    <SearchBarContainer>
        <Search></Search>
        <SearchBarStyles placeholder='Search for a country...'/>
    </SearchBarContainer>   
    )
}

export default SearchBar