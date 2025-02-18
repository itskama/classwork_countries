import { ICountry } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  country: ICountry | null;
}

export default function CountryDetails({ country }: Props) {
  if (!country) {
    return <Typography variant="h6">Выберите страну</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography variant="h5">{country.name}</Typography>
          <Typography>Столица: {country.capital}</Typography>
          <Typography>Население: {country.population.toLocaleString()}</Typography>
          <Typography>Границы: {country.borders.join(', ') || 'Нет'}</Typography>
          <img src={country.flag} alt="flag" width={100} />
        </CardContent>
      </Card>
    </Box>
  );
}
