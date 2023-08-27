import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import AbcIcon from '@mui/icons-material/Abc';
// import EggOutlinedIcon from '@mui/icons-material/EggOutlined';

import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popover, Typography } from '@mui/material';

import '@styles/foodmenu/FoodSearch.scss';

enum Component {
  SearchBar,
  NavMenu
}

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [component, setComponent] = useState<Component | null>(null);

  const navigate = useNavigate();

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>, contentType: Component) => {
    setAnchorEl(event.currentTarget);
    setComponent(contentType);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    // setComponent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='flex-centered-container padding food-nav full-width'>
      <LocalDiningIcon fontSize='large' color='error' className='logo' />
      <Typography variant='h4' className='title' onClick={() => { navigate('/cookbook') }}>COOKBOOK</Typography>
      <span className='spacer'></span>
      <IconButton className='action-btn' onClick={(event) => handleOpenPopover(event, Component.SearchBar)}>
        <SearchIcon fontSize='large' className='logo' />
      </IconButton>
      <IconButton className='action-btn' onClick={(event) => handleOpenPopover(event, Component.NavMenu)}>
        <MenuIcon fontSize='large' className='logo' />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {component === Component.SearchBar && <SearchBar navigate={navigate} handleClosePopover={handleClosePopover} />}
        {component === Component.NavMenu && <NavMenu navigate={navigate} handleClosePopover={handleClosePopover} />}
      </Popover>

    </div>
  )
}

export default AppBar;

interface ComponentProps {
  navigate: NavigateFunction
  handleClosePopover: () => void
}

const SearchBar = ({ navigate, handleClosePopover }: ComponentProps) => {

  const [text, setText] = useState('')

  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text) {
      navigate(`/cookbook/search/${text}`);
      handleClosePopover();
    }
  }

  return (
    <form className='display-flex form' onSubmit={handleSubmit}>
      <input className='input' type="text" placeholder='Looking for a meal?' onChange={handleChange} />
      <IconButton className='form-btn' type="submit" size='small' color='info'>
        <SearchIcon fontSize='small' className='form-icon' />
      </IconButton>
    </form>
  )
}

const NavMenu = ({ navigate, handleClosePopover }: ComponentProps) => {

  const handleClick = (link: string) => {
    navigate(`/cookbook/${link}`);
    handleClosePopover();
  }

  return (
    <Paper sx={{ width: 200, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem onClick={() => { handleClick('category') }}>
          <ListItemIcon children={<CategoryOutlinedIcon color='info' />} />
          <ListItemText children='Categories' />
        </MenuItem>
        <MenuItem onClick={() => { handleClick('area') }}>
          <ListItemIcon children={<LanguageIcon color='info' />} />
          <ListItemText children='Regional Dishes' />
        </MenuItem>
        <MenuItem onClick={() => { handleClick('alphabet') }}>
          <ListItemIcon children={<AbcIcon color='info' />} />
          <ListItemText children='Alphabetical' />
        </MenuItem>
        {/* TODO:  INGREDIENTS */}
        {/* <MenuItem onClick={() => { handleClick('ingredient') }}>
          <ListItemIcon children={<EggOutlinedIcon color='info' />} />
          <ListItemText children='Ingredients' />
        </MenuItem> */}
        <MenuItem onClick={() => { handleClick('random') }}>
          <ListItemIcon children={<StarBorderRoundedIcon color='info' />} />
          <ListItemText children='Surprise Me!' />
        </MenuItem>
      </MenuList>
    </Paper>
  )
}