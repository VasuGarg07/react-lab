import { NavLink } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

import '@styles/moviedb/Sidebar.scss'
const Sidebar = () => {

  return (
    <div className="movie-menu flex-centered-column ">
      <NavItem link="home">
        <HomeRoundedIcon className="icon" />
        <span>Home</span>
      </NavItem>
      <NavItem link="movies">
        <MovieFilterRoundedIcon className="icon" />
        <span>Movies</span>
      </NavItem>
      <NavItem link="series">
        <TheaterComedyRoundedIcon className="icon" />
        <span>Series</span>
      </NavItem>
      <NavItem link="genres">
        <GridViewRoundedIcon className="icon" />
        <span>Categories</span>
      </NavItem>
    </div>
  )
}

export default Sidebar

interface NavItemProps {
  link: string,
  children: any
}

const NavItem = ({ link, children }: NavItemProps) => {
  return (
    <NavLink to={link} className="link flex-centered-container-vr full-width">
      {children}
    </NavLink>
  )
}