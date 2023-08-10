import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './MenuItem.css';

export interface IMenuItemProps {
  text: string;
  destination: string;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <Link to={props.destination}  className='main-menu-item'>
      <Box
        component='li'
        sx={{
          height: 100,
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.03)',
            cursor: 'pointer',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Source Sans 3", sans-serif',
          }}
          >
          {props.text}
        </Typography>
      </Box>
    </Link>
  );
};

export default MenuItem;
