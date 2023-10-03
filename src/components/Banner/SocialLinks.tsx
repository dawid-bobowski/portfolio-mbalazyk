import { Box } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = () => {
  return (
    <Box
      id='social-links'
      sx={{
        gap: 2,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
      }}
    >
      <LinkedInIcon sx={styles.socialIcon} onClick={() => window.open('https://www.linkedin.com/in/marta-bałażyk-35b850211/', '_blank', 'noreferrer')} />
      <InstagramIcon sx={styles.socialIcon} onClick={() => window.open('https://www.instagram.com/ko.t.rekta/', '_blank', 'noreferrer')} />
    </Box>
  );
};

const styles = {
  socialIcon: {
    fontSize: '1.75rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}

export default SocialLinks;
