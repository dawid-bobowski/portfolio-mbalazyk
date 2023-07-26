import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ICON_STYLE = {
  fontSize: 28,
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
      <InstagramIcon sx={ICON_STYLE} />
      <LinkedInIcon sx={ICON_STYLE} />
    </Box>
  )
}

export default SocialLinks;