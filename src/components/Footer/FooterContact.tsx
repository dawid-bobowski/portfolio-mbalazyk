import { Box, Typography } from '@mui/material';

const FooterContact = () => {
  return (
    <Box id='footer-contact' className='footer-box' sx={styles.footerBox}>
      <Typography className='footer-box-header' variant='h5' sx={styles.footerBoxHeader}>
        Marta Bałażyk
      </Typography>
      <Typography className='footer-box-text' sx={{
        ...styles.footerBoxText,
        color: '#929292',
      }}>
        Profesjonalna redakcja i korekta. Pozwól mi zaopiekować się Twoim tekstem!
      </Typography>
      <Typography className='footer-box-text' sx={{
        ...styles.footerBoxText,
        marginTop: '1rem',
      }}>
        Telefon: (+48) 576 364 972
      </Typography>
      <Typography className='footer-box-text' sx={styles.footerBoxText}>
        Email: martabalazyk@gmail.com
      </Typography>
      <Typography className='footer-box-text' sx={styles.footerBoxText}>
        Dostępność w ciągu dnia w godz. 8-16
      </Typography>
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

export default FooterContact;