import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IconButton, Popover, Typography } from "@mui/material";
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='flex-centered-container movie-nav full-width'>
      <OndemandVideoOutlinedIcon fontSize="large" className='logo' />
      <Typography variant='h6' className='title' onClick={() => { navigate('') }}> <span className="main">Movie</span>Grove</Typography>
      <span className='spacer'></span>
      <IconButton className='action-btn' onClick={(event) => handleOpenPopover(event)}>
        <SearchIcon fontSize='medium' color="primary" />
      </IconButton>

      <Popover open={open} anchorEl={anchorEl} onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <SearchBar navigate={navigate} handleClosePopover={handleClosePopover} />
      </Popover>
    </div>
  )
}

export default Navbar;

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
      navigate(`search/${text}`);
      handleClosePopover();
    }
  }

  return (
    <form className='display-flex form' onSubmit={handleSubmit}>
      <input className='input' type="text" placeholder='Looking for a Movie?' onChange={handleChange} />
      <IconButton className='form-btn' type="submit" color='info'>
        <SearchIcon fontSize='small' className='form-icon' />
      </IconButton>
    </form>
  )
}