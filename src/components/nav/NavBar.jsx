import { NavBarContainer, NavBarTitle, DarkModeButton} from "./NavBarStyles"
import Moon from '../../assets/Moon.jsx'
export const NavBar = () => {
    return(
        <NavBarContainer>
            <NavBarTitle>Where in the world?</NavBarTitle>
            <DarkModeButton><Moon></Moon>Dark mode</DarkModeButton>
        </NavBarContainer>
    )
}

export default NavBar