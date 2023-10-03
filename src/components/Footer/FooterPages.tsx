import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { MENU_OPTIONS } from '../../constants';

const FooterPages = () => {
  return (
    <Box id='footer-pages' className='footer-box' sx={styles.footerBox}>
      <Typography className='footer-box-header' variant='h5' sx={styles.footerBoxHeader}>Strony</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        marginTop: '1rem',
      }}>
        {MENU_OPTIONS.map((item) => (
          <Link key={item.destination} to={item.destination} className='main-menu-item'>
            <Typography sx={styles.footerBoxText}>
              {item.text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

const styles = {
  footerBox: {
    width: '100%',
    padding: { md: '0 2rem', lg: '0 4rem' },
  },
  footerBoxHeader: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: 'bold',
    textAlign: { xs: 'center', md: 'left' },
  },
  footerBoxText: {
    fontFamily: '"Source Sans 3", sans-serif',
    color: '#fff',
  },
};

export default FooterPages;