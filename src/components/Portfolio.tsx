import { Box, Typography } from '@mui/material';

import BookCover1 from '../assets/book-covers/01.jpg';
import BookCover2 from '../assets/book-covers/02.jpg';
import BookCover3 from '../assets/book-covers/03.jpg';

interface IBook {
  title: string;
  author: string;
  description: string;
  cover: string;
}

const BOOKS: IBook[] = [
  {
    title: 'Nuclear Bananas',
    author: 'Mike McNaughton',
    description: 'Aliquam quis fringilla diam. Curabitur nec orci est. Maecenas nec ligula et augue ultricies \
      tristique.',
    cover: BookCover1,
  },
  {
    title: 'Elusive Monster',
    author: 'Dr Maurice Burton',
    description: 'Nulla congue, libero eu tincidunt auctor, quam lorem auctor ex, non tristique leo odio quis velit. \
      Quisque non.',
    cover: BookCover2,
  },
  {
    title: 'Snow in Florida',
    author: 'Liz Osborn',
    description: 'Duis vitae fringilla risus. Donec tincidunt varius sem at ultricies. Vivamus ipsum arcu, pulvinar \
      id lobortis non, suscipit vitae est. Sed dictum ex.',
    cover: BookCover3,
  },
]

const Portfolio = () => {
  return (
    <Box
      id='portfolio'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '4rem 0',
      }}
    >
      <Typography
        variant='h3'
        component='h1'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
        }}
      >
        Kilka ostatnich współprac
      </Typography>
      <Box
        sx={{
          marginTop: '4rem',
          display: 'flex',
        }}
      >
        {
          BOOKS.map((book) => {
            return (
              <Box className='collab' sx={{
                width: 300,
                height: 300,
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${book.cover})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

              }}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: '1rem',
                  color: '#fff',
                  textAlign: 'justify',
                  cursor: 'default',
                  opacity: 0,
                  transition: '0.2s ease-in-out',
                  '&:hover': {
                    opacity: 1,
                    transition: '0.2s ease-in-out',
                  }
                }}>
                  <Typography>{book.title}</Typography>
                  <Typography>{book.author}</Typography>
                  <Typography>{book.description}</Typography>
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  );
}

export default Portfolio;