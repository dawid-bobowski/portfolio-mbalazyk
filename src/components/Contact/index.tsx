import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import PaperPlane from '/paper-plane.png';
import { EMAIL_VALIDATION, PRIMARY_COLOR } from '../../constants';



const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (EMAIL_VALIDATION.test(email)) {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (message) {
      setMessageError('');
    }
  }, [message]);

  return (
    <Box
      id='main-contact'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0',
        backgroundColor: '#8B1A29',
      }}
    >
      <Typography
        variant='h3'
        component='h2'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          color: '#FFF',
        }}
      >
        Skontaktuj się ze mną!
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          width: 450,
          height: 450,
          backgroundColor: '#1f1f1f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '4rem 3rem',
          color: '#fff',
          position: 'relative',
        }}>
          <Typography variant='h4' sx={{
            fontFamily: 'Vollkorn, serif',
            fontWeight: 'bold',
          }}>
            Formularz kontaktowy
          </Typography>
          <Typography sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            marginTop: '1rem',
          }}>
            Masz pytania? Chcesz umówić się na wycenę? Skorzystaj z fomularza obok! To najprostsza i najwygodniejsza 
            forma kontaktu w celu ustalenia dalszych szczegółów.
          </Typography>
          <Box sx={{
            position: 'absolute',
            bottom: '2rem',
            right: '3rem',
          }}>
            <img src={PaperPlane} alt='paper plane' width={200} />
          </Box>
        </Box>
        <Box sx={{
          width: 700,
          height: 450,
          backgroundColor: '#efefef',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem 3rem',
        }}>
          <TextField
            required
            id='email'
            label='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            sx={styles.formTextField}
          />
          <TextField
            required
            multiline
            rows={10}
            id='message'
            label='Treść wiadomości'
            value={message}
            onChange={e => setMessage(e.target.value)}
            error={!!messageError}
            helperText={messageError}
            sx={styles.formTextField}
          />
          <Button
            type='submit'
            variant='contained'
            onClick={(e) => {
              e.preventDefault();
              if (email === '') {
                setEmailError('Wpisz e-mail');
              } else {
                setEmailError('');
              }
              if (!EMAIL_VALIDATION.test(email)) {
                setEmailError('Wprowadź poprawny e-mail');
              }
              if (message === '') {
                setMessageError('Wpisz wiadomość');
              } else {
                setMessageError('');
              }
              if (email && message) {
                window.open(`mailto:martabalazyk@gmail.com?subject=Formularz kontaktowy — ${email}&body=${message}`);
              }
            }}
            sx={styles.styledButton}
          >
            Wyślij
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  formTextField: {
    width: '100%',
  },
  styledButton: {
    zIndex: 2,
    width: 200,
    fontFamily: '"Source Sans 3", sans-serif',
    textTransform: 'initial',
    backgroundColor: PRIMARY_COLOR,
    '&:hover': {
      backgroundColor: '#b6152a',
      color: '#fff',
    },
  },
};

export default Contact;