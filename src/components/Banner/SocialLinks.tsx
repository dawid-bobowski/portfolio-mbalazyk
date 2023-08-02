import { Box } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
  fontSize: '1.5rem',
  '&:hover': {
    cursor: 'pointer',
  },
};

const SocialLinks = () => {
  return (
    <Box
      id='social-links'
      sx={{
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
      }}
    >
      <LinkedInIcon sx={iconStyle} onClick={() => window.open('https://www.linkedin.com/in/marta-bałażyk-35b850211/', '_blank', 'noreferrer')} />
      <InstagramIcon sx={iconStyle} onClick={() => window.open('https://www.instagram.com/ko.t.rekta/', '_blank', 'noreferrer')} />
    </Box>
  );
};

export default SocialLinks;
