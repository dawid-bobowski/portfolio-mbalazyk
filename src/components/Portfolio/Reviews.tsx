import { Box, Typography } from '@mui/material';

import QuotationMarkIcon from '@mui/icons-material/FormatQuote';

import Reviewer1 from '../../assets/reviews/01.jpg';
import Reviewer2 from '../../assets/reviews/02.jpg';

interface IReview {
  image: string;
  name: string;
  title: string;
  text: string;
  date: string;
}

const REVIEWS: IReview[] = [
  {
    image: Reviewer1,
    name: 'Helena Marciniak',
    title: 'Autorka książki „Wszystko i nic”',
    text: 'Morbi pellentesque accumsan tellus eu condimentum. Curabitur id urna imperdiet, sollicitudin ex aliquet, \
      vulputate orci. Nulla nec mauris eget quam tincidunt blandit sed a odio. Vestibulum condimentum elit \
      ipsum, sit amet egestas ex condimentum ac. Sed leo odio, vulputate dictum sapien vitae ligula.',
    date: '27 lipca 2023',
  },
  {
    image: Reviewer2,
    name: 'Michał Piekarz',
    title: 'Redaktor naczelny portalu zrobtosam.pl',
    text: 'Phasellus et turpis varius, bibendum diam non, consectetur purus. Nullam nisi sem, luctus ut luctus id, \
      efficitur sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare magna ut ante \
      volutpat, in maximus lectus cursus. Nam facilisis erat sed convallis blandit. Ut ut lorem et.',
    date: '2 sierpnia 2023',
  },
];

const Reviews = () => {
  return (
    <Box id='customer-reviews' sx={{
      width: '100%',
      display: 'flex',
      justifyContent:' center',
      gap: 2,
    }}>
      {
        REVIEWS.map(review => {
          return (
            <Box className='customer-review-box' key={review.name} sx={styles.customerReviewBox}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                <Box className='customer-review-pic' sx={{
                  ...styles.customerReviewPic,
                  backgroundImage: `url(${review.image})`,
                }} />
                <Box>
                  <Typography sx={{
                    ...styles.customerReviewText,
                    fontWeight: 'bold',
                    fontSize: '2rem',
                  }}>
                    {review.name}
                  </Typography>
                  <Typography variant='subtitle2' sx={{
                    ...styles.customerReviewText,
                    fontStyle: 'italic',
                    color: '#a0a0a0',
                  }}>
                    {review.title}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography sx={{
                  ...styles.customerReviewText,
                  padding: '1rem',
                }}>
                  <QuotationMarkIcon fontSize='large' sx={{
                    color: '#c7263b',
                  }} />
                </Typography>
                <Typography sx={{
                  ...styles.customerReviewText,
                  padding: '0 1.5rem',
                  textAlign: 'justify',
                }}>
                  {review.text}
                </Typography>
              </Box>
              <Typography variant='subtitle2' sx={{
                ...styles.customerReviewText,
                position: 'absolute',
                right: '2rem',
                bottom: '1rem',
                color: '#a0a0a0',
              }}>{review.date}</Typography>
            </Box>
          )
        })
      }
    </Box>
  )
}

const styles = {
  customerReviewBox: {
    width: 600,
    height: 450,
    position: 'relative',
    padding: '2rem',
    backgroundColor: '#f3f3f3',
  },
  customerReviewPic: {
    width: 100,
    height: 100,
    backgroundSize: 'contain',
    borderRadius: '50%',
  },
  customerReviewText: {
    fontFamily: '"Source Sans 3", sans-serif',
  },
};

export default Reviews;