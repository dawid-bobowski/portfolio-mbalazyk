import { Box, Typography } from '@mui/material';

const FooterPages = () => {
  return (
    <Box id='footer-pages' className='footer-box' sx={styles.footerBox}>
      <Typography className='footer-box-header' variant='h5' sx={styles.footerBoxHeader}>Strony</Typography>
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
};

export default FooterPages;