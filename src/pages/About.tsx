import { Box } from '@mui/material';

const About = () => {
  return (
    <Box
      id='about'
      sx={{
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <Box sx={{
        width: 'calc(100vw - 8rem)',
        height: 'calc(100vh - 104px - 8rem)',
        margin: '4rem auto',
        backgroundColor: '#fff',
      }}>

      </Box>
    </Box>
  )
}

export default About;