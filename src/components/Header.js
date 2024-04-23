import React, {useState, useEffect} from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum'
import axios from './axios'
const Header = () => {
    const [favorites, setFavorites] = useState('');
    const [blocks, setBlocks] = useState('');

    useEffect(() => {
        async function fetchFavorites() {
          const req = await axios.get("/dating/favorites")
          setFavorites(req.data.favorite)
        }
        async function fetchBlocks() {
            const req = await axios.get("/dating/blocks")
            setBlocks(req.data.block)
          }
        fetchFavorites()
        fetchBlocks()
      }, [])

    const handleClick = () => {
        console.log(favorites);
        console.log(blocks);

        alert("Favorites are: \n"+favorites[0].name+"\n"+favorites[1].name+"\n"+favorites[2].name+"\n"+favorites[3].name);
        alert("Blocks are: \n"+blocks[0].name+"\n"+blocks[1].name+"\n"+blocks[2].name+"\n"+blocks[3].name);
    }

    return (
        <div className="header">
            <IconButton size="large" onClick={handleClick}>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton size="large">
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
}
export default Header