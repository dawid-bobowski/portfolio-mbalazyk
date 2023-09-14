import { Box, Typography } from '@mui/material';
import QuotationMarkIcon from '@mui/icons-material/FormatQuote';

import { IReview } from './Reviews';
import { PRIMARY_COLOR } from '../../constants';

interface IReviewProps {
  review: IReview;
  hide?: boolean;
}

const Review = (props: IReviewProps) => {
  const { review, hide } = props;

  return (
    <Box className='customer-review-box' key={review.name} sx={{
      ...styles.customerReviewBox,
      display: { xs: hide ? 'block' : 'none', lg: 'block'  },
    }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 3, xl: 4 },
            minHeight: 100,
          }}>
            <Box className='customer-review-pic' sx={{
              ...styles.customerReviewPic,
              backgroundImage: `url(${review.image})`,
            }} />
            <Box>
              <Typography sx={{
                ...styles.customerReviewText,
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', xl: '2rem' },
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
                color: PRIMARY_COLOR,
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
}

const styles = {
  customerReviewBox: {
    maxWidth: 600,
    height: 450,
    position: 'relative',
    padding: '2rem',
    backgroundColor: '#f3f3f3',
    transition: '0.5s ease-in-out',
  },
  customerReviewPic: {
    width: 100,
    height: 100,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
  },
  customerReviewText: {
    fontFamily: '"Source Sans 3", sans-serif',
  },
};

export default Review;