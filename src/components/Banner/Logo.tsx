import { Box } from '@mui/material';
import LogoPng from '../../assets/logo.png';

const Logo = () => {
  return (
    <Box>
      <img
        src={LogoPng}
        height={60}
      />
    </Box>
  );
};

export default Logo;
