import React from 'react';
import { useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm(' ');
    }
  }


  return (


    <Paper component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solod #e3e3e3',
        pl: 5,
        boxShadow: 'none',
        mr: { sm: 5 }
      }
      }

    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>

    </Paper>
  );
}

export default SearchBar;
