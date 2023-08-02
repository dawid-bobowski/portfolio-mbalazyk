import { Box, Typography } from '@mui/material';

import BookCover1 from '../../assets/book-covers/01.jpg';
import BookCover2 from '../../assets/book-covers/02.jpg';
import BookCover3 from '../../assets/book-covers/03.jpg';
import BookCover4 from '../../assets/book-covers/04.jpg';
import BookCover5 from '../../assets/book-covers/05.jpg';
import BookCover6 from '../../assets/book-covers/06.jpg';
import FeatherGraphicLeft from '/feather-graphic-left.png';
import FeatherGraphicRight from '/feather-graphic-right.png';

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
  {
    title: 'Spite House',
    author: 'Gary Mansfield',
    description: 'Aliquam quis fringilla diam. Curabitur nec orci est. Maecenas nec ligula et augue ultricies \
      tristique.',
    cover: BookCover4,
  },
  {
    title: 'Alekhine\'s Gun',
    author: 'Michael Chomsney',
    description: 'Nulla congue, libero eu tincidunt auctor, quam lorem auctor ex, non tristique leo odio quis velit. \
      Quisque non.',
    cover: BookCover5,
  },
  {
    title: 'Baby',
    author: 'Melissa Kent',
    description: 'Duis vitae fringilla risus. Donec tincidunt varius sem at ultricies. Vivamus ipsum arcu, pulvinar \
      id lobortis non, suscipit vitae est. Sed dictum ex.',
    cover: BookCover6,
  },
]

const Collabs = () => {
  return (
    <Box
        sx={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          maxWidth: 'calc(900px + 1rem)',
          position: 'relative',
        }}
      >
        <Box sx={{
          opacity: 0.1,
          position: 'absolute',
          display: 'flex',
          transform: 'rotate(35deg)',
          top: '2rem',
          right: '-22rem',
        }}>
          <img src={FeatherGraphicLeft} alt='feather graphic' height={500} />
        </Box>
        {
          BOOKS.map((book) => {
            return (
              <Box className='collab' key={book.title} sx={{
                ...styles.collab,
                backgroundImage: `url(${book.cover})`,
                zIndex: 2,
              }}>
                <Box sx={styles.collabInner}>
                  <Typography sx={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}>{book.title}</Typography>
                  <Typography sx={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontStyle: 'italic',
                    color: '#a0a0a0',
                  }}>{book.author}</Typography>
                  <Typography sx={{
                    marginTop: '0.5rem',
                    fontFamily: '"Source Sans 3", sans-serif',
                  }}>{book.description}</Typography>
                </Box>
              </Box>
            )
          })
        }
        <Box sx={{
          opacity: 0.1,
          position: 'absolute',
          display: 'flex',
          transform: 'rotate(-35deg)',
          top: '2rem',
          left: '-22rem',
        }}>
          <img src={FeatherGraphicRight} alt='feather graphic' height={500} />
        </Box>
      </Box>
  )
}

const styles = {
  collab: {
    width: 300,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  collabInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '1rem',
    color: '#fff',
    textAlign: 'center',
    cursor: 'default',
    opacity: 0,
    transition: '0.2s ease-in-out',
    '&:hover': {
      opacity: 1,
      transition: '0.2s ease-in-out',
    },
  },
}

export default Collabs;