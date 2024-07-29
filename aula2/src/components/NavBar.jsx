import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function NavBar(){
    const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ alignContent: 'space-between' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recentes" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Por perto" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}