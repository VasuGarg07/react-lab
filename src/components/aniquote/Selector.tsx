import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  fetchByAnime: (str: string) => Promise<void>,
  fetchByChar: (str: string) => Promise<void>
}

enum Selection {
  TITLE = 'title',
  CHARACTER = 'character'
}

const Selector = ({ fetchByAnime, fetchByChar }: Props) => {

  const [selection, setSelection] = useState<Selection>(Selection.TITLE)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleFetch = () => {
    if (searchTerm && selection) {
      selection == Selection.TITLE ? fetchByAnime(searchTerm) : fetchByChar(searchTerm);
    } else {
      setSearchTerm('')
    }
  }

  return (
    <div className="quote-container flex-centered-column full-width padding">
      <Typography variant="h6" className="text-center section-title">
        Random Anime Quotes
      </Typography>
      <div className="display-flex actions search">
        <select className="input left-action padding" onChange={e => setSelection(e.target.value as Selection)}>
          <option value=''>Search by</option>
          <option value={Selection.CHARACTER}>By Character Name</option>
          <option value={Selection.TITLE}>By Anime Title</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          className="input padding"
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search ..."
        />
        <IconButton
          onClick={handleFetch}
          className="btn right-action"
          size="large"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Selector