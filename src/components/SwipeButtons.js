import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import IconButton from '@material-ui/core/IconButton'
const SwipeButtons = () => {
return (
  <div className="swipeButtons">
  <IconButton className="swipeButtons__repeat" size="large">
  <ReplayIcon fontSize="large" />
  </IconButton>
  <IconButton className="swipeButtons__left" size="large">
  <CloseIcon fontSize="large" />
  </IconButton>
  <IconButton className="swipeButtons__star" size="large">
  <StarRateIcon fontSize="large" />
  </IconButton>
  <IconButton className="swipeButtons__right" size="large">
  <FavoriteIcon fontSize="large" />
  </IconButton>
  <IconButton className="swipeButtons__lightning" size="large">
  <FlashOnIcon fontSize="large" />
  </IconButton>
  </div>
);
}
export default SwipeButtons