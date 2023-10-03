import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './MenuItem.css';

export interface IMenuItemProps {
  text: string;
  destination: string;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <Link to={props.destination} className='main-menu-item'>
      <Box
        component='li'
        sx={{
          height: { xs: '4.5rem', md: 100 },
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '1rem 2rem', md: '0 1rem' },
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.03)',
            cursor: 'pointer',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: { xs: '1.25rem', md: '1rem' },
          }}
          >
          {props.text}
        </Typography>
      </Box>
    </Link>
  );
};

export default MenuItem;
