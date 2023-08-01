import { Box } from '@mui/material';
import LogoPng from '../../assets/logo.png';

const Logo = () => {
  return (
    <Box onClick={() => window.open('/', '_self', 'noreferrer')} sx={{
      cursor: 'pointer',
    }}>
      <img
        src={LogoPng}
        height={60}
      />
    </Box>
  );
};

export default Logo;
