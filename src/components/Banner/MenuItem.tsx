import { Box, Typography } from '@mui/material';

interface IMenuItemProps {
  text: string;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <Box component='li' sx={{
      height: 100,
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
        cursor: 'pointer',
      }
    }}>
      <Typography sx={{
        fontFamily: '"Source Sans 3", sans-serif',
      }}>{props.text}</Typography>
    </Box>
  )
}

export default MenuItem;