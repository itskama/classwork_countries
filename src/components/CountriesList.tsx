/*************  ✨ Codeium Command 🌟  *************/
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IShortCountry } from '../types';

interface Props {
  countries: IShortCountry[];
  onSelectCountry: (code: string) => void;
}

export default function CountriesList({ countries, onSelectCountry }: Props) {
  return (
    <Drawer 
      open 
      variant="permanent" 
      sx={{
        flexShrink: 0, 
        width: 300, 
        height: '100vh', 
        position: 'static', 
        zIndex: 'auto'
      }}
    >
      <Box sx={{ width: 280 }} role="presentation">
        <List>
          {countries.map((country) => (
            <ListItem button key={country.alpha3Code} onClick={() => onSelectCountry(country.alpha3Code)}>
              <ListItemText primary={country.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

/******  e06cda97-36fb-464c-abb2-70a003624fc4  *******/