import { Box, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterOther = () => {
  return (
    <Box
      id='footer-other'
      className='footer-box'
      sx={{
        ...styles.footerBox,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
        <Box className='social-icon-box' sx={styles.socialIconBox}>
          <LinkedInIcon className='social-icon' sx={styles.socialIcon} onClick={
            () => window.open('https://www.linkedin.com/in/marta-bałażyk-35b850211/', '_blank', 'noreferrer')
          } />
        </Box>
        <Box className='social-icon-box' sx={styles.socialIconBox}>
          <InstagramIcon className='social-icon' sx={styles.socialIcon} onClick={
            () => window.open('https://www.instagram.com/ko.t.rekta/', '_blank', 'noreferrer')
          } />
        </Box>
      </Box>
      <Box
        id='page-author' 
        onClick={
          () => window.open('https://github.com/dawid-bobowski', '_blank', 'noreferrer')
        }
        sx={{
          marginTop: '2rem',
          color: '#929292',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
        }}
        >
          Strona stworzona przez Dawida Bobowskiego
        </Typography>
        <GitHubIcon />
      </Box>
    </Box>
  )
}

const styles = {
  footerBox: {
    width: '100%',
    padding: '0 4rem',
  },
  footerBoxHeader: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: 'bold',
  },
  footerBoxText: {
    fontFamily: '"Source Sans 3", sans-serif',
  },
  socialIconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  socialIcon: {
    fontSize: '3rem',
    '&:hover': {
      cursor: 'pointer',
    }
  },
};

export default FooterOther;