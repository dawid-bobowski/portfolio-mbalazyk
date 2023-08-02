import { Box, Typography } from '@mui/material';

import './Footer.css';

const FooterContact = () => {
  return (
    <Box id='footer-contact' className='footer-box'>
      <Typography className='footer-box-header' variant='h5'>
        Marta Bałażyk
      </Typography>
      <Typography className='footer-box-text' sx={{
        color: '#929292',
      }}>
        Profesjonalna redakcja i korekta. Pozwól mi zaopiekować się Twoim tekstem!
      </Typography>
      <Typography className='footer-box-text' sx={{
        marginTop: '1rem',
      }}>
        Telefon: (+48) 576 364 972
      </Typography>
      <Typography className='footer-box-text'>
        Email: martabalazyk@gmail.com
      </Typography>
      <Typography className='footer-box-text'>
        Dostępność w ciągu dnia w godz. 8-16
      </Typography>
    </Box>
  )
}

export default FooterContact;