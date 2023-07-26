import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ICON_STYLE = {
  fontSize: 28,
  '&:hover': {
    cursor: 'pointer',
  }
};

const SocialLinks = () => {
  return (
    <Box id='social-links' sx={{
      gap: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
    }}>
      <LinkedInIcon sx={ICON_STYLE} />
      <InstagramIcon sx={ICON_STYLE} />
    </Box>
  )
}

export default SocialLinks;